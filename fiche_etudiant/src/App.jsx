import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
      <div>
        <h1>Fiche étudiant</h1>
        <label>Nom & Prénom:</label><h4> Laaridhi Yassine</h4>
        <label>Email:</label><h4> hwehdhhe@gmail.com</h4>
        <label>Télephone</label><h4>+216 12345678</h4>
        <label>Filière:</label><h4> Genie Logiciel et systemes d'information</h4>
        <label>Année d'étude:</label>
        <label>Groupe:</label><h4> GLSI 2B</h4>
        <label>Ville:</label><h4> Chebba</h4>
      </div>
  );
}

export default App
