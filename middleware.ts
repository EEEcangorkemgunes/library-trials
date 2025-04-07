import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { apiAuthPrefix, authRoutes, publicRoutes } from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (request) => {
  if (request.nextUrl.pathname.startsWith("/api/user")) {
    if (!process.env.INTERNAL_ACCESS) return new NextResponse(null, { status: 500 });
    if (!request.headers.get("secret-access")) return new NextResponse(null, { status: 404 });
    return NextResponse.next();
  }
  const isApiAuthRoute = request.nextUrl.pathname.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) {
    console.log("auth route içine girdi");
    return NextResponse.next();
  }
  const isLoggedIn = !!request.auth;
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);
  if (isAuthRoute) {
    console.log("auth route request");
    if (isLoggedIn) {
      /*           return NextResponse.redirect(
            new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl)
          ); */
    }
    return;
  }
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  if (isPublicRoute) {
    return NextResponse.next();
  }
  if (request.auth?.user) {
    const internalSecret = process.env.INTERNAL_ACCESS;
    if (!internalSecret) {
      return new NextResponse(null, { status: 500 });
    }
    const res = await fetch(`${process.env.DOMAIN_NAME}/api/user/${request.auth.user.id}`, {
      headers: {
        "secret-access": internalSecret,
      },
    });
    if (!res.ok) {
      return new NextResponse(null, { status: 403 });
    }
    request.auth.user = await res.json();
  }

  // console.log("isAuthRoute:", isAuthRoute);
  // console.log("isLoggedin:", isLoggedIn);
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
