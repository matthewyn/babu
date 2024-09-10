import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
      credentials: {
        phoneNumber: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { phoneNumber, password } = credentials;
        if (typeof phoneNumber !== "string" || typeof password !== "string") {
          return null;
        }
        user = await prisma.user.findUnique({
          where: {
            phoneNumber,
          },
        });
        if (!user) {
          return null;
        }
        const isVerified = await bcrypt.compare(password, user.password as string);
        if (!isVerified) {
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
