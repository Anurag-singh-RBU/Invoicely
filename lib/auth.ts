import { betterAuth } from "better-auth";
import { schema } from "@/db/schema";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/emails/resetpwd";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({

  baseURL: process.env.BETTER_AUTH_URL!,  

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  emailAndPassword: {
    enabled: true,
    sendResetPasswordEmail: true,
    sendResetPassword: async ({user , url}) => {
      resend.emails.send({
        from: "singhar_7@rknec.edu",
        to: user.email,
        subject: "Reset Your Password",
        react: ForgotPasswordEmail({username: user.name , userEmail: user.email , resetUrl: url , companyName: "Invoicely"})
      })
    }
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  plugins: [nextCookies()],
});
