"use client"

//copier la fonction dan sle layout

export default function ErrorBoundary({error, reset}:{error: Error; reset: ()=> void;}){



  return (
    <>
    <div>Erreur dans Product - {error.message}</div>
    <button onClick={reset} className="border border-teal-500">Retester</button>
    </>
  )
}

