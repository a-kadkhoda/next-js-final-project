"use server";
import { JWTgenerate } from "@/lib/auth";
import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";

interface ActionState {
  success: boolean;
  message: string;
  data: { name: string; email: string } | null;
}

export async function loginUserAction(
  state: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required.",
        data: null,
      };
    }

    const result = await sql(
      "SELECT name, email, password FROM users WHERE email = $1",
      [email]
    );

    if (result.length === 0) {
      return { success: false, message: "User not found.", data: null };
    }

    const user = result[0];

    const isPasswordCorrect = password == user.password ? true : false;
    const accessToken = await getAccessToken({
      email,
    });

    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken.value, { httpOnly: true });

    if (!isPasswordCorrect) {
      return { success: false, message: "Invalid password.", data: null };
    }

    return {
      success: true,
      message: "Login successful!",
      data: { name: user.name, email: user.email },
    };
  } catch (error) {
    console.error("Error logging in user:", error);
    return { success: false, message: "Failed to log in.", data: null };
  }
}

export async function getAccessToken(payload: { email: string }) {
  const token = await JWTgenerate(payload);
  return { value: token };
}
