"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {

    const pathname = usePathname()

  return (
    <nav className='bg-gray-900 p-3 text-white'>
      <ul className="flex items-center gap-2 text-sm">
        <li>
          <Link href='/' className={pathname === "/" ? 'text-blue-500' : ''} >Home</Link>
        </li>
        <li>
          <Link href='/contact' className={pathname === "/contact" ? 'text-blue-500' : ''}>Contact</Link>
        </li>
        <li>
          <Link href='/login' className={pathname === "/login" ? 'text-blue-500' : ''}>Login</Link>
        </li>
        <li>
          <Link href='/register' className={pathname === "/register" ? 'text-blue-500' : ''}>register</Link>
        </li>
        <li>
          <Link href='/archives/webdesign' className={pathname === "/archives/webdesign" ? 'text-blue-500' : ''}>Webdesign(Archives)</Link>
        </li>
      </ul>
    </nav>
  )
}
