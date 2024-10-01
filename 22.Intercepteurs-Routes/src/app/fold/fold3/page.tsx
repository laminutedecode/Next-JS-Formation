import Link from "next/link"
export default function Fold3(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE FOLD 3</h1>
    <Link href="/fold/fold4">Fold 4</Link>
  </div>
  )
}