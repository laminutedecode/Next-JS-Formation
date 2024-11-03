1) npx create-next-app@latest
2) Prisma extension VS code
3) npm i prisma --save-dev
4) npx prisma init
5) npm i @prisma/client
6) Dans el fichier .env changer DATABASE_URL="file:./dev.db"
7) Rajouter .env a gitignore
8) Créer le dossier utils avec le fichier db.ts
9)  Dans le fichier schema.psima choisir sqlite
10) Creer le model Task  dans le fichier schema.psima
11) npx prisma migrate dev
12) npx prisma studio (outils prisma)