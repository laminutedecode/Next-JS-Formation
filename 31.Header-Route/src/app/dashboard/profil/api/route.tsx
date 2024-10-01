import {type NextRequest} from 'next/server'

import {headers} from 'next/headers'

// Cela importe un type spécifique appelé NextRequest du module 'next/server'. Les types sont souvent utilisés en JavaScript avec des outils tels que TypeScript pour déclarer la forme des données.


export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get('Authorization'));
  console.log(headerList.get('Authorisation'));

  return new Response("<h1>PROFIL API</h1>", {
    headers: {
      "Content-Type": "text/html"
    }
  });
}




