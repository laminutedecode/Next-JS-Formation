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

// on voit que le composant ce mest a jour pourtant si je relload la page je tombe sur une 404 cest la que les unmatched route rentre en jeu et notament le fichier default.tsx. le fichier default.tsx dans next js sert de solution de secours pour restituer le contenu lorsque le framework ne peut pas récupérer l'état actif d'un emplacement à partir de l'URL actuelle. vous pouvez définir l'interface utilisateur pour les itinéraires sans correspondance  soit en reflétant le contenu trouvé dans page.tsx, soit en créant une vue entièrement personnalisée. créer fichier dafault dans dashboard et dans les composant de dashboard