import {type NextRequest} from 'next/server'

import {headers, cookies} from 'next/headers'




export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get('Authorization'));
  console.log(headerList.get('Authorisation'));

// Définir la durée de vie du cookie en secondes (ici, 7 jours)
const oneWeekInSeconds = 7 * 24 * 60 * 60;
// Définir la date d'expiration du cookie
const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + oneWeekInSeconds * 1000);
  //3
  cookies().set('resultsCookies', "20", {
    expires: expirationDate
  })
//2
const theme = request.cookies.get('theme');

console.log(theme);
console.log(cookies().get('resultsCookies'));


//on uara un objet dans le terminal




  return new Response("<h1>PROFIL API</h1>", {
    headers: {
      "Content-Type": "text/html",
      //
      "Set-Cookie": "theme=dark",
      //aller dans thunder client dans headers cookie et faire un get sur http://localhost:3000/dashboard/profil/api on aura un no cookies available
    }
  });
}




