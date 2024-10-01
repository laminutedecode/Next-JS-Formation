"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"


const navLinks = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forgot Password", href:"/forgot-password"},
]


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {


  //##
  const pathname = usePathname()





  return (
    <>
        <nav>
          <ul>{navLinks.map((link)=> {
            
            const isActive = pathname.startsWith(link.href)

            return (
              <li key={link.name}><Link className={isActive ? "text-red-500 font-bold" : "text-slate-900"} href={link.href} >{link.name}</Link></li>
            )
          })}</ul>
        </nav>
     
        <h2>GROUPE AUTH</h2>
        {children}


    </>
  )
}

