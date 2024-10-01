import {type NextRequest} from 'next/server'

import {headers, cookies} from 'next/headers'




export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get('Authorization'));
  console.log(headerList.get('Authorisation'));


const oneWeekInSeconds = 7 * 24 * 60 * 60;

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + oneWeekInSeconds * 1000);
  
  cookies().set('resultsCookies', "20", {
    expires: expirationDate
  })

const theme = request.cookies.get('theme');

console.log(theme);
console.log(cookies().get('resultsCookies'));






  return new Response("<h1>PROFIL API</h1>", {
    headers: {
      "Content-Type": "text/html",
      //
      "Set-Cookie": "theme=dark",
    }
  });
}




