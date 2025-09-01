import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { pool } from "@/src/lib/postgres";
import PostgresAdapter from "@auth/pg-adapter";
import { setName } from "@/src/lib/auth/setNameServerAction";
import { clearStaleTokens } from "./clearStaleTokensServerAction";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PostgresAdapter(pool),
  secret: process.env.AUTH_SECRET, // Used to sign the session cookie so AuthJS can verify the session
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (this value is also the default)
  },
  pages: {
    signIn: "/auth/sign-in",
    verifyRequest: "/auth/auth-success",
    error: "/auth/auth-error",
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true, // Allow automatic linking of users table to accounts table in database - not dangerous when used with OAuth providers that already perform email verification (like Google)
    }),
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.name !== token.name) {
        token.name = session.name;

        try {
          if (token.name) {
            await setName(token.name);
          }
        } catch (error) {
          console.error("Failed to set user name:", error);
        }
      }

      if (user) {
        await clearStaleTokens(); // Clear up any stale verification tokens from the database after a successful sign in
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      console.log("session callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };
    },
  },
});