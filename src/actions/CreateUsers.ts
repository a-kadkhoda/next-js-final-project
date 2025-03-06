"use server";
import { neon } from "@neondatabase/serverless";
interface ActionState {
  success: boolean;
  message: string;
  data: { name: string } | null;
}

export async function createUserAction(
  state: ActionState | null, 
  formData: FormData
):Promise<ActionState> {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (!email || !password) {
      return { success: false, message: "Email and password are required."  , data : null};
    }

    await sql("INSERT INTO users (email, password , name) VALUES ($1, $2 ,$3)", [email, password , name]);

    return { success: true, message: "User created successfully!" , data : {
        name 
    } };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user."  , data : null};
  }
}
