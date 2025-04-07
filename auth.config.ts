import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      // console.log("session icine girdi ve token",token);
      const tempToken = { ...token };
      delete tempToken.iat;
      delete tempToken.exp;
      delete tempToken.jti;
      delete tempToken.sub;
      /*       return {
        ...session,
        user: {
          ...session.user,
          id: crypto.randomUUID(),
        },
      }; */
      return {
        ...session,
        user: {
          ...session.user,
          ...tempToken,
          id: token.sub,
        },
      };
    },
  },
  session: { strategy: "jwt", maxAge: 2592000 },
  jwt: { maxAge: 2592000 },
  secret: process.env.AUTH_SECRET,
  providers: [],
} satisfies NextAuthConfig;
