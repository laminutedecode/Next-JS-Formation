// Importation de PrismaClient depuis @prisma/client
import { PrismaClient } from '@prisma/client'

// Fonction pour créer une nouvelle instance de PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Déclaration pour étendre l'objet globalThis avec une propriété prismaGlobal
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Création ou réutilisation de l'instance Prisma
// Si globalThis.prismaGlobal existe, on l'utilise ; sinon, on crée une nouvelle instance
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// Exportation de l'instance Prisma pour utilisation dans d'autres parties de l'application
export default prisma

// Si l'environnement n'est pas de production, on stocke l'instance dans globalThis.prismaGlobal
// pour éviter de créer de nouvelles instances à chaque rechargement en développement
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
