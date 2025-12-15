import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("image") as File

  if (!file) {
    return NextResponse.json({ error: "No image" }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "invoice-logos",
      },
      (error, result) => {
        if (error) reject(error)
        resolve(result)
      }
    ).end(buffer)
  })

  return NextResponse.json({
    imageUrl: uploadResult.secure_url,
  })
}
