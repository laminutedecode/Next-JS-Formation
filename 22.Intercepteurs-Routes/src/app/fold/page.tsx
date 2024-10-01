import Link from "next/link"


export default function Fold(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE FOLD</h1>
    <Link href="/fold/fold2">Fold 2</Link>
  </div>
  )
}