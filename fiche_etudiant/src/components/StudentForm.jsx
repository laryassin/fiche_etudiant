import './StudentForm.css'
import { useState } from 'react';

function StudentForm({ onAjouterEtudiant,etudiantAModifier,onModifierEtudiant, }){
    const [nom, setNom] = useState(etudiantAModifier?.nom || "");
    const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
    const [mail, setEmail] = useState(etudiantAModifier?.mail || "");
    const [number, setTelephone] = useState(etudiantAModifier?.number || "");
    const [fil, setFiliere] = useState(etudiantAModifier?.fil || "");
    const [annee, setAnneeEtude] = useState(etudiantAModifier?.annee || "");
    const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
    const [ville, setVille] = useState(etudiantAModifier?.ville || "");
    const [image, setImage] = useState(etudiantAModifier?.image || "");
    const [erreurs,setErreurs] = useState({});
    function validerFormulaire(){
        const nouvellesErreurs ={};
        if(!FormData.nom.trim()){
            nouvellesErreurs.nom = "Nom est obligatoire";
        }
        if(!FormData.prenom.trim()){
            nouvellesErreurs.prenom = "Prenom est obligatoire";
        }
        setErreurs(nouvellesErreurs);
        return Object.keys(nouvellesErreurs).length ===0;
    }
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
    if (etudiantAModifier){
        onModifierEtudiant({
            ...etudiantAModifier,
            ...nouvelEtudiant,
        });

    } else{
        onAjouterEtudiant(nouvelEtudiant);
    }
}
    return( 
    <div className='Student'>
        <form onSubmit={handleSubmit} className='student-form'>
            <label >nom:</label><br /><input type="text" value={FormData.nom} required onChange={(e) => setNom(e.target.value)}/> {erreurs.nom && <p className='error-msg'>{erreurs.nom}</p>}<br />
            <label >prenom:</label><br /><input type="text" value={FormData.prenom} required onChange={(e) => setPrenom(e.target.value)}/>{erreurs.prenom && <p className='error-msg'>{erreurs.prenom}</p>}<br />
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
            <h2>{etudiantAModifier ? "Modifier l'etudiant" : "Ajouter un etudiant"}</h2>
            <button type="submit" className='btn-submit'>{etudiantAModifier ? "Modifier" : "Ajouter"}</button>
            <button type="reset">Reset</button>
        </form>
    </div>
    );
}
export default StudentForm