export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { userImgs } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, desc } from "drizzle-orm";

export async function GET(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const images = await db.select({
      id: userImgs.id,
      imgUrl: userImgs.imgUrl,
      createdAt: userImgs.createdAt,
    }).from(userImgs).where(eq(userImgs.userId, session.user.id)).orderBy(desc(userImgs.createdAt));

  return NextResponse.json(images);
  
}
