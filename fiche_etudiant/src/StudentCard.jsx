import './App.css'
import { useState } from 'react';
function StudentCard(student) {
  const [coordVisibles, setcoordVisibles] = useState(false);
        function basculerInformations() {
          setcoordVisibles(!coordVisibles);
        }
        
  return (
        
      <div>
        
        <img src={student.image} alt={student.nom} />
        <h1>Fiche étudiant</h1>
        <p>Nom & Prénom: {student.nom} {student.prenom}</p>
        {coordVisibles && (
          <>
            <p>Email:{student.mail}</p>
            <p>Télephone:{student.number}</p>
          </>
        )}
        <p>Filière:{student.fil}</p>
        <p>Année d'étude:</p>
        <p>Groupe:{student.groupe}</p>
        <p>Ville:{student.ville}</p>
        <button type='button'>Contacter</button>
        <button type='button' onClick={basculerInformations}>Afficher/Masquer</button>
        <button type='button' onClick={() => student.onSupprimer(student.mail)}>Supprimer</button>
        <button type='button' onClick={() => student.onModifier(student.mail)}>Modifier</button>
      </div>
  );
}

export default StudentCard
