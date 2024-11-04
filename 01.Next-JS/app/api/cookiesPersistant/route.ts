import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
  const {cookieName, cookieValue} = await request.json();

  const maxAge = 30 * 24 * 60 * 60

  const response = NextResponse.json({message: 'Cookie persistant créé'})

  response.cookies.set(cookieName, cookieValue, {
    maxAge,
    path: '/',
    httpOnly: true,
    // secure: true,
  })

  return response
}