import NextAuth, { CredentialsSignin, type DefaultSession } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    isActive?: boolean;
    firstName?: string;
    lastName?: string;
    role?: string;
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      email?: string | null;
      sub?: string;
      isActive?: boolean;
      firstName?: string;
      lastName?: string;
      role?: string;
    } & DefaultSession["user"];
  }
  interface User {
    isActive: boolean;
  }
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        return {
          email: "cangorkemgunes@gmail.com",
          id: "randommidddd",
          name: "can",
          isActive: true,
        };
        throw new CredentialsSignin();
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    signIn({ account, user }) {
      return true;
      return user.isActive;
    },

    async jwt({ token, user, session, account, profile }) {
      if (!token.sub) {
        return token;
      }
      return token;
    },
  },
});
