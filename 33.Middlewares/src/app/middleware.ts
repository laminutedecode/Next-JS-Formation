//ce fichier sert a implémenter une logique de middleware personnalisée.

import { NextRequest, NextResponse } from "next/server";


// export function middleware(request: NextRequest){

//     return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher: "profil"
// }

// Dans ce cas, la fonction middleware redirige toutes les requêtes correspondant à une URL commençant par "profil" vers l'URL racine ("/"). Cela est réalisé en utilisant les fonctions NextRequest et NextResponse pour manipuler les requêtes entrantes et sortantes. La configuration spécifiée dans config indique que ce middleware ne s'applique qu'aux URL commençant par "profil".

// export function middleware(request: NextRequest){
//   if(request.nextUrl.pathname === "/profil") {

//     return NextResponse.redirect(new URL('/hello', request.url))
//   }
// }


// Dans cette fonction middleware, une condition est ajoutée pour vérifier si le chemin d'URL de la requête entrante est "/profil". Si cette condition est vraie, la fonction renvoie une redirection vers "/hello", en utilisant la fonction NextResponse.redirect. Cela signifie que toutes les requêtes avec l'URL "/profil" seront redirigées vers "/hello".

export function middleware(request: NextRequest){
  const response = NextResponse.next()

  const themePreference = request.cookies.get('theme')

  if(!themePreference){
    response.cookies.set('theme', 'dark')
  }



  return response;
}


// Dans cette fonction middleware, une réponse est créée en utilisant NextResponse.next(), qui récupère la réponse par défaut pour la requête donnée. Ensuite, le code vérifie si le cookie "theme" est défini dans la requête. Si ce n'est pas le cas, il le définit avec la valeur "dark" en utilisant response.cookies.set(). En outre, un en-tête personnalisé est ajouté à la réponse avec response.headers.set(). Enfin, la réponse modifiée est retournée pour être renvoyée au client. En résumé, ce middleware permet de définir un cookie "theme" par défaut sur "dark" s'il n'est pas déjà défini dans la requête, et ajoute un en-tête personnalisé à la réponse.