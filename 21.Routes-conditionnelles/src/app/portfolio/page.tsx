import Link from "next/link"


export default function About(){
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE PORTFOLIO</h1>


    <ul className="flex flex-col gap-5">
      <li>
        <Link href="/portfolio/webdesign">Webdesign</Link>
      </li>
      <li>
        <Link href="/portfolio/design">design</Link>
      </li>
    </ul>
  </div>
  )
}