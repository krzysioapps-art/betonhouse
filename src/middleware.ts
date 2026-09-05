import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const demoRoutes = [
  "/polityka-prywatnosci",
  "/polityka-prywatnosci/",
  "/regulamin",
  "/regulamin/",
  "/projekty",
  "/projekty/",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (demoRoutes.includes(pathname)) {
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
    "/projekty",
    "/projekty/",
  ],
};