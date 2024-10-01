
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     
        <h2>GROUPE AUTH</h2>
        {children}


    </>
  )
}

// Accder au url pour voir le resultat
//http://localhost:3000/register
//http://localhost:3000/login
//http://localhost:3000/forgot-password


