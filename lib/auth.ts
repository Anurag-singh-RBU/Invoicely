import { betterAuth } from "better-auth";
import { schema } from "@/db/schema";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/emails/resetpwd";

// --- Resend ---
const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({

  // MUST match frontend env
  baseURL: process.env.BETTER_AUTH_URL!, // http://localhost:3000

  // --- Social Login (Google) ---
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  // --- Email + Password Authentication ---
  emailAndPassword: {
    enabled: true,

    sendResetPasswordEmail: true, // MUST BE TRUE !!!

    // Email Sender Logic
    sendResetPassword: async ({ user, url }) => {

      // VERY IMPORTANT → MUST "await"
      const result = await resend.emails.send({
        from: "Invoicely <onboarding@resend.dev>", // Verified sender
        to: user.email,
        subject: "Reset Your Password",
        react: ForgotPasswordEmail({
          username: user.name,
          userEmail: user.email,
          resetUrl: url,
          companyName: "Invoicely",
        }),
      });

      console.log("RESET PASSWORD EMAIL RESULT:", result);

      if (result.error) {
        console.error("RESEND ERROR:", result.error);
      }
    },
  },

  // --- Database (PostgreSQL + Drizzle) ---
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  plugins: [nextCookies()],
});

// Next.js API routes export
export const { GET, POST } = auth;
