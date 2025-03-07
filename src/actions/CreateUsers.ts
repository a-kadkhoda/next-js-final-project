"use server";
import { JWTgenerate } from "@/lib/auth";
import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";
interface ActionState {
  success: boolean;
  message: string;
  data: { name: string } | null;
}

export async function createUserAction(
  state: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "").trim();

    const accessToken = await getAccessToken({
      email,
    });

    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken.value, { httpOnly: true });

    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required.",
        data: null,
      };
    }

    await sql(
      "INSERT INTO users (email, password , name) VALUES ($1, $2 ,$3)",
      [email, password, name]
    );

    return {
      success: true,
      message: "User created successfully!",
      data: {
        name,
      },
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user.", data: null };
  }
}

export async function getAccessToken(payload: { email: string }) {
  const token = await JWTgenerate(payload);
  return { value: token };
}
