import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ message: "Cookies deleted" });

  const cookieNames = ["CookieSession", "CookiePersistant"]

  cookieNames.forEach(cookieName => {
    response.cookies.set(cookieName, '', {
      maxAge: -1,
      path: '/',
    })
  })
  return response;
}