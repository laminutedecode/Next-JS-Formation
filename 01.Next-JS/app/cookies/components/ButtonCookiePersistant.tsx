"use client"

export default function ButtonCookiePersistant() {

  const handleCreateCookieSession = async ()=> {
    await fetch('/api/cookiesPersistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cookieName: 'CookiePersistant', cookieValue: 'Valeur du cookie persistant'})
    });
    alert('Cookie persistant créé')
  }

  return (
    <button onClick={handleCreateCookieSession} className="bg-green-500 hover:bg-green-800 text-white rounded-md p-2">
      Créer un cookie persistant
    </button>
  )
}
