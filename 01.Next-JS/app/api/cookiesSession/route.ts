import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { cookieName, cookieValue } = await request.json();
  
  const response = NextResponse.json({ message: 'Cookie de session' });

  response.cookies.set(cookieName, cookieValue, {
    path: '/', 
  });

  return response;
}
