"use server"

import {cookies} from "next/headers"

export default async function ComponentCookiesServer() {

  const cookieStore = await cookies()

  const cookieEntries = Array.from(cookieStore).map(([name, cookie]) => (
    <div key={name}>
      <p>{name} - {cookie.value}</p>
    </div>
  ))

  return (
    <div className="w-full flex items-center justify-center gap-2 mt-6">
        {cookieEntries.length > 0 ? (
          <div>{cookieEntries}</div>
        ) : (
          <p>Aucun cookies</p>
        )}
    </div>
  )
}
