import Link from 'next/link'
import Card from '../../components/Card'

export default function Notifications(){
  return (
    <Card>
      <h5>Composant Notifications</h5>
      <Link href="/dashboard/archived">Archive</Link>
    </Card>
  )
}