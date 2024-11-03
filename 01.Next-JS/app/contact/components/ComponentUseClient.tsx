"use client"

import {useState, useEffect} from "react"

export default function ComponentUseClient() {

  const [count, setCount] = useState(0)

  useEffect(()=> {
    console.log('rendu client')
  }, [])

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Incrementer</button>
    </div>
  )
}
