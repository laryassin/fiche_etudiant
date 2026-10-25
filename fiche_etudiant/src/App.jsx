import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
const student = {
  "nom" : "Laaridhi",
  "prenom" : "Yassine",
  "mail" : "hwehdhhe@gmail.com",
  "number" : "+216 12345678",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSI 2B",
  "ville" : "Chebba",
  "image" : "https://media.gettyimages.com/id/673426160/photo/business-life.jpg?s=2048x2048&w=gi&k=20&c=JacYmxtDZ6EmM9ZwmdiAj7Ysk6ZHPCi1_VeDR-Mxw1Q=",
}
function App() {
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
        <button>contacter</button>
      </div>
  );
}

export default App
