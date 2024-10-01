import Link from "next/link"
import Card from "@/app/components/Card"


export default function Archive(){
  return (
    <Card>
      <h5>Composant Notifications</h5>
      <Link href="/dashboard/archived">Archive default</Link>
    </Card>
  )
}
