export default function Card({children}:{children: React.ReactNode}){
  return (
    <div className="p-8 border border-red-500">{children}</div>
  )

}