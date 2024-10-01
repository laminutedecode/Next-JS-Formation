"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

//##
import { useState } from "react";


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


  const pathname = usePathname()


  //##
  const [state, setState] = useState("")

  const handleChange = (e : any)=> {
    const val = e.target.value;
    setState(val)
  }

  // utilisez le hook useState pour stocker la valeur de l'input, mais vous n'initialisez pas cette valeur avec une valeur par défaut lors de la déclaration de l'état initial. Par conséquent, lorsque vous naviguez entre les différentes pages (Register, Login, Forgot Password), l'état de votre composant AuthLayout est réinitialisé à chaque fois, et l'input affiche toujours ce qui ya ecrit ici. renomer layouts en templates.tsx et montrer maintenant que le state disparais dans linput

  return (
    <>
    <div>
      <input className="border border-teal-900" onChange={handleChange} type="text" value={state} />

    </div>


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

