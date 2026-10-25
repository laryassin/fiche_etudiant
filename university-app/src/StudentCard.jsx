import './App.css'

function StudentCard(student) {
  return (
      <div>
        <img src={student.image} alt={student.nom} />
        <h1>Fiche étudiant</h1>
        <p>Nom & Prénom: {student.nom} {student.prenom}</p>
        <p>Email:{student.mail}</p>
        <p>Télephone:{student.number}</p>
        <p>Filière:{student.fil}</p>
        <p>Année d'étude:</p>
        <p>Groupe:{student.groupe}</p>
        <p>Ville:{student.ville}</p>
        <button type='button'>Contacter</button>
      </div>
  );
}

export default StudentCard
