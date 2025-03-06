import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const id =(await params).id

    
      const result = await sql("SELECT * FROM products WHERE id = $1", [id]);

      if (result.length === 0) {
        return NextResponse.json(
          { success: false, message: "Product not found.", data: null },
          { status: 404 }
        );
      }

    return NextResponse.json({
      success: true,
      message: "successful",
      data: result,
    });
  } catch (error) {
    console.error("Error Data not found:", error);
    return NextResponse.json({
      success: false,
      message: "Data not found",
      data: null,
    });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({ message: "POST request received", data });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({ message: "PUT request received", data });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE request received" });
}
