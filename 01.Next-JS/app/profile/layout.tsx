import React, {Suspense} from "react"

export default function ProfileLayout({primary, notifications, analytics}: {primary: React.ReactNode, notifications: React.ReactNode, analytics: React.ReactNode})  {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <main>{primary}</main>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <aside>{notifications}</aside>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <aside>{analytics}</aside>
      </Suspense>
    </div>
  )
}