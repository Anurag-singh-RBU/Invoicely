import { db } from "@/db/drizzle";
import { userImgs } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Image id required" },
      { status: 400 }
    );
  }

  const img = await db.select().from(userImgs).where(eq(userImgs.id , id)).limit(1);

  if(!img.length){

    return NextResponse.json(
      { error: "Image not found" },
      { status: 404 }
    );

  }

  await db.delete(userImgs).where(eq(userImgs.id, id));

  return NextResponse.json({
    success: true,
    deletedId: id,
  });
}
