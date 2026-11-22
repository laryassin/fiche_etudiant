import './App.css'
import StudentCard from './StudentCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import StudentForm from './components/StudentForm';
function App() {
  const [students, setEtudiants] = useState ([
{
  "nom" : "Laaridhi",
  "prenom" : "Yassine",
  "mail" : "hwehdhhe@gmail.com",
  "number" : "+216 12345678",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSI 2B",
  "ville" : "Chebba",
  "image" : "https://media.gettyimages.com/id/673426160/photo/business-life.jpg?s=2048x2048&w=gi&k=20&c=JacYmxtDZ6EmM9ZwmdiAj7Ysk6ZHPCi1_VeDR-Mxw1Q=",
},
{
  "nom" : "Laaridhi",
  "prenom" : "youssef",
  "mail" : "laryas@gmail.com",
  "number" : "+216 87654321",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSI 2A",
  "ville" : "Mahdia",
  "image" : "https://imgs.search.brave.com/vfZOO2hcP13Pr6qA7MoiRFHKXUCzdO5ZC2oEsoSwcic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9yYW5kb20t/Z3V5LXBvc2luZy1j/bGFzcy0yNjBudy0y/MzMxMDk4NTU5Lmpw/Zw",
},
{
  "nom" : "ayari",
  "prenom" : "amine",
  "mail" : "aminayari@gmail.com",
  "number" : "+216 15832467",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSI 2D",
  "ville" : "Tunis",
  "image" : "https://imgs.search.brave.com/qS_R5VpuZwRZfb_75i6pHwWea82MAgTCO_QtddWJhnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjcz/NDE1MTcwL3Bob3Rv/L2J1c2luZXNzLWxp/ZmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW5hTDFSSkRq/d3dGdXVSR0I2RU5j/Z2tubVN2blkwd1k1/cnFaVll5NldJNk09",
},
{
  "nom" : "zehi",
  "prenom" : "smair",
  "mail" : "samirzehi@gmail.com",
  "number" : "+216 12345678",
  "fil" : "ingenierie reseau et systemes",
  "groupe" : "IRS 2B",
  "ville" : "Chebba",
  "image" : "https://imgs.search.brave.com/21kPXcbbedm1x6DmLjKygIsWiPM_X7H0iCF00r8tOOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FhLzhj/L2NiL2FhOGNjYmZj/NDlmZWYyNjk5YWVi/OTc5YmY0YmIyZDdm/LmpwZw",
}
  ])
  function ajouterEtudiant(nouvelEtudiant) {
  const etudiantAvecId = {
    ...nouvelEtudiant,
    id: Date.now(),
  };
  setEtudiants((oldEtudiants) => [...oldEtudiants, etudiantAvecId])
  }
  function supprimerEtudiant(mail) {
    setEtudiants(oldEtudiants =>{return oldEtudiants.filter(etudiant => etudiant.mail !== mail)})
  }
  const [recherche, setRecherche] = useState("");
  const [etudiantAModifier, setEtudiantAModifier]=useState(null);
  function modifierEtudiant(etudiant){
    setEtudiantAModifier(etudiant);
  }
  const studentsFiltres = students.filter((student) => {
  const texte = recherche.toLowerCase();
  return (
    student.nom.toLowerCase().includes(texte) ||
    student.prenom.toLowerCase().includes(texte) ||
    student.fil.toLowerCase().includes(texte)
  );
  });
  function enregistrerModification(etudiantModifie){
    setEtudiants((oldEtudiants) => oldEtudiants.map((etudiant) =>
      etudiant.id == etudiantAModifier.id
    ? {...etudiantModifie, id: etudiant.id}
    : etudiant,
    )
   );
   setEtudiantAModifier(null);
  }
  return (
    <>
    <Header />
    <Navbar />
    <input type="text" placeholder='chercher' value={recherche} onChange={(event) => setRecherche(event.target.value)}/>
      <div className='Student-list'>
        {studentsFiltres.map((student) => ( 
          <StudentCard
            prenom={student.prenom}
            nom ={student.nom}
            key={student.mail}
            mail={student.mail}
            number={student.number}
            fil={student.fil}
            groupe={student.groupe}
            ville={student.ville}
            image={student.image}
            annee={student.annee}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
            
          />
        ))}
      </div>
    <div className='actions'>
      <button onClick={ajouterEtudiant}>+ Ajouter un etudiant</button>
    </div>
    <Footer /> 
    <StudentForm key={etudiantAModifier ? etudiantAModifier?.id : "nouveau"} onAjouterEtudiant={ajouterEtudiant} etudiantAModifier={etudiantAModifier}/> 
    </>
  );  
}

export default App
