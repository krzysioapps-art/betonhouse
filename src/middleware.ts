import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const demoRoutes = [
  "/polityka-prywatnosci",
  "/polityka-prywatnosci/",
  "/regulamin",
  "/regulamin/",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    demoRoutes.includes(pathname) ||
    pathname === "/projekty" ||
    pathname.startsWith("/projekty/")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/demo";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/polityka-prywatnosci",
    "/polityka-prywatnosci/",
    "/regulamin",
    "/regulamin/",
    "/projekty/:path*",
  ],
};