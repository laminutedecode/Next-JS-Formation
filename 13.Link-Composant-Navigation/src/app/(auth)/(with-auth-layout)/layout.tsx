import Link from "next/link"

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
  return (
    <>
        <nav>
          <ul>{navLinks.map((link)=> {
            return (
              <li><Link href={link.href}>{link.name}</Link></li>
            )
          })}</ul>
        </nav>
     
        <h2>GROUPE AUTH</h2>
        {children}


    </>
  )
}

