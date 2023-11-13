import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import TwitterProvider, { TwitterProfile } from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: "2.0",
      profile(profile: TwitterProfile) {
        return {
          id: profile.data.id,
          username: profile.data.username,
          name: profile.data.name ?? "",
          image: profile.data.profile_image_url ?? "",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM, // The "from" address that you want to use
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return Promise.resolve({
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      });
    },
  },

  events: {
    async signIn({ account }) {
      try {
        if (account) {
          const foundAccount = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
          });

          if (foundAccount) {
            await prisma.account.update({
              where: {
                provider_providerAccountId: {
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                },
              },
              data: {
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
              },
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
