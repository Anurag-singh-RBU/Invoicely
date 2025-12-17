import { db } from "@/db/drizzle";
import { userSigns } from "@/db/schema";
import { auth } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";

export async function GET(req: Request){

    const session = await auth.api.getSession({ headers: req.headers });

    if(!session?.user?.id){

        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    }

    const signs = await db.select({
        id: userSigns.id,
        signUrl: userSigns.signUrl,
        publicId: userSigns.publicId,
        createdAt: userSigns.createdAt,
      }).from(userSigns).where(eq(userSigns.userId, session.user.id)).orderBy(desc(userSigns.createdAt));

    return new Response(JSON.stringify(signs));

}