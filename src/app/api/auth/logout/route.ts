import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function GET() {
    const cookieStore = await cookies();
    cookieStore.delete('accessToken');
    return NextResponse.redirect(new URL('/', `${process.env.NEXT_PUBLIC_API_BASE_URL}`))
}