import Link from "next/link"

export default function Nav() {
  return (
    <nav className="h-[50px] w-full bg-gray-800 text-white flex items-center gap-3 p-3">
        <Link href="/">Firestore Database</Link>
        <Link href="/realtime">RealTime Databse</Link>
        <Link href="/SignInAndUp">Login</Link>
        <Link href="/Dashboard">Dashboard</Link>
    </nav>
  )
}
