"use client"
import { useState } from 'react';
import { useRealtime } from '@/hooks/useRealtime';

export default function Page() {

  const { preferences, addPreference, deletePreference, updatePreference, editingPreference, startEditingPreference } = useRealtime();
  
  const [language, setLanguage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPreference(language);
    setLanguage('');
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingPreference) {
      const updatedPreference = { ...editingPreference, language: e.target.value };
      startEditingPreference(updatedPreference);
    }
  };

  const handleEditSubmit = (id: string, newLanguage: string) => {
    updatePreference(id, newLanguage);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <label>
          Quel langage utilisez-vous le plus ?
          <input 
            type="text" 
            value={language} 
            onChange={handleChange} 
            required 
            className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Soumettre</button>
      </form>
      <ul>
        {preferences.map((preference) => (
          <li key={preference.id} className="mb-2 flex items-center">
            {editingPreference?.id === preference.id ? (
              <>
                <input 
                  type="text" 
                  value={editingPreference.language} 
                  onChange={handleEditChange} 
                  className="mr-2 p-2 border border-gray-300 rounded-md"
                />
                <button onClick={() => handleEditSubmit(preference.id, editingPreference.language)} className="mr-2 px-2 py-1 bg-green-500 text-white rounded-md">Valider</button>
              </>
            ) : (
              <>
                <span className="mr-2">{preference.language}</span>
                <button onClick={() => deletePreference(preference.id)} className="mr-2 px-2 py-1 bg-red-500 text-white rounded-md">Supprimer</button>
                <button onClick={() => startEditingPreference(preference)} className="px-2 py-1 bg-yellow-500 text-white rounded-md">Modifier</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
