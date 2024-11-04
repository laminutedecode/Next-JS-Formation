import React from 'react'
import ButtonCookieSession from './ButtonCookieSession'
import ButtonCookiePersistant from './ButtonCookiePersistant'
import ButtonDeleteCookies from './ButtonDeleteCookies'

export default function CookieContent() {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-2 my-2'>
      <ButtonCookieSession/>
      <ButtonCookiePersistant/>
      <ButtonDeleteCookies/>
    </div>
  )
}
