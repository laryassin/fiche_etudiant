import './StudentForm.css'
import { useState } from 'react';

function StudentForm({ onAjouterEtudiant }){
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setEmail] = useState("");
    const [number, setTelephone] = useState("");
    const [fil, setFiliere] = useState("");
    const [annee, setAnneeEtude] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");
    function handleSubmit(e){
    e.preventDefault();
    const nouvelEtudiant ={
        nom: nom.trim(),
        prenom: prenom.trim(),
        mail: mail.trim(),
        number: number.trim(),
        fil: fil,
        annee: annee.trim(),
        groupe: groupe.trim(),
        ville: ville.trim(),
        image: image,
    };
    console.log("Nouvel etudiant ajoute :", nouvelEtudiant);
    onAjouterEtudiant(nouvelEtudiant);
}
    return( 
    <div className='Student'>
        <form onSubmit={handleSubmit} className='student-form'>
            <label >nom:</label><br /><input type="text" value={nom} required onChange={(e) => setNom(e.target.value)}/><br />
            <label >prenom:</label><br /><input type="text" value={prenom} required onChange={(e) => setPrenom(e.target.value)}/><br />
            <label >email:</label><br /><input type="text" value={mail} required onChange={(e) =>setEmail(e.target.value)}/><br />
            <label >numero de telephone:</label><br /><input type="text" value={number} required onChange={(e) =>setTelephone(e.target.value)}/><br />
            <label >filiere:</label><br />
            <select value={fil} required onChange={(e) =>setFiliere(e.target.value)}>
                <option value="">Choisir une filiere</option>
                <option value="GLSI">Genie Logiciel et systemes d'information</option>
                <option value="IRS">ingenierie reseau et systemes</option>
                <option value="DSI">DSI</option>
            </select><br />
            <label >annee:</label><br /><input type="number" value={annee} required onChange={(e) =>setAnneeEtude(e.target.value)}/><br />
            <label >groupe:</label><br /><input type="text" value={groupe} required onChange={(e) =>setGroupe(e.target.value)}/><br />
            <label >ville:</label><br /><input type="text" value={ville} required onChange={(e) =>setVille(e.target.value)}/><br />
            <label >image:</label><br /><input type="file" accept="image/*" required onChange={(e) => {const fichier = e.target.files[0];if (fichier) {setImage(URL.createObjectURL(fichier));}}}/><br />
            <button type="submit" className='btn-submit'>Ajouter</button>
            <button type="reset">Reset</button>
        </form>
    </div>
    );
}
export default StudentForm