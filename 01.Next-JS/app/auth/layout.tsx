import HeaderAuth from "./components/HeaderAuth";


export default function AuthLayout({children} : Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <HeaderAuth/>
      {children}
    </>
  )
}