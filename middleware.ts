import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: async ({ req, token }) => {
      // // const session = await getSession();
      // if (req.nextUrl.pathname.startsWith("/dashboard")) {
      //   return false;
      // }
      return true;
    },
  },
});
