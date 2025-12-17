import { db } from "@/db/drizzle";
import { userSigns } from "@/db/schema";
import cloudinary from "@/lib/cloudinary";
import { eq } from "drizzle-orm";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const { publicId } = await request.json();

    if (!id) {

        return new Response(JSON.stringify({ error: "Signature id required" }), { status: 400 });

    }

    if (!publicId) {

        return new Response(JSON.stringify({ error: "Public ID required" }), { status: 400 });

    }

    try {
        
    const cloudRes = await cloudinary.uploader.destroy(publicId);  // Cloudinary se delete

    if(cloudRes.result !== "ok" && cloudRes.result !== "not found"){

      return new Response(

        JSON.stringify({ error: "Cloudinary delete failed", cloudRes }),
        { status: 500 }

      );

    }

    const sign = await db.select().from(userSigns).where(eq(userSigns.id , id)).limit(1); // DB se delete

    if(!sign.length){

      return new Response(

        JSON.stringify({ error: "Signature not found" }),

        { status: 404 }

        );

    }

    await db.delete(userSigns).where(eq(userSigns.id, id));

    return new Response(

        JSON.stringify({

            success: true,
            deletedId: id,

        })

    );

  } catch (err) {

    console.error(err);

    return new Response(

      JSON.stringify({ error: "Delete failed" }),
      { status: 500 }

    );

  }

}