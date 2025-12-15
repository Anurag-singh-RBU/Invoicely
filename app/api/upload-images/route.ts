import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { db } from "@/db/drizzle";
import { userImgs } from "@/db/schema";
import { authClient } from "@/lib/auth-client";

export async function POST(req: Request) {
  
  const { data : session } = authClient.useSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) {
    return NextResponse.json({ error: "No image" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "user-assets" },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
      }
    ).end(buffer);
  });

  await db.insert(userImgs).values({
    id: crypto.randomUUID(),
    userId: session.user.id,
    imgUrl: uploadResult.secure_url,
  });

  return NextResponse.json({ success: true });
}
