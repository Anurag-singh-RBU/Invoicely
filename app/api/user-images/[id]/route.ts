import { db } from "@/db/drizzle";
import { userImgs } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import cloudinary from "@/lib/cloudinary";

export async function DELETE( req: NextRequest, { params }: { params: { id: string } }){

  const { id } = params;

  if(!id){

    return NextResponse.json(
      { error: "Image id required" },
      { status: 400 }
    );

  }

  const img = await db.select().from(userImgs).where(eq(userImgs.id, id)).limit(1);

  if(!img || img.length === 0){

    return NextResponse.json(
      { error: "Image not found" },
      { status: 404 }
    );

  }

    try {

        const result = await cloudinary.uploader.destroy(img.find(item => item.id === id)!.id);

            if (result.result !== "ok") {

            return NextResponse.json(
                { error: "Cloudinary delete failed", result },
                { status: 400 }
            );

        }

        await db.delete(userImgs).where(eq(userImgs.id, id));

        return NextResponse.json({

            success: true,
            deletedId: id,
            
        });

    } 
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(err){

        return NextResponse.json(
        { error: "Failed to delete image" },
        { status: 500 }
        );

    }

}