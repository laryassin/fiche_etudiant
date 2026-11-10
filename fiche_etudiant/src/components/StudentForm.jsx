import './StudentForm.css'
function handleSubmit(e){
    e.preventDefault();
    const nouvelEtudiant ={
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        filiere: filiere,
        anneeEtude: anneeEtude,
        groupe: groupe,
        ville: ville,
        image: image,
    };
    console.log("Nouvel etudiant ajoute :", nouvelEtudiant);
    onAjouterEtudiant(nouvelEtudiant);
}
function StudentForm({ onAjouterEtudiant }){
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [anneeEtude, setAnneeEtude] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");
    return( 
    <div className='Student'>
        <form onSubmit={handleSubmit} className='student-form'>
            <label htmlFor="nom">nom:</label><br /><input type="text" name="nom" id="nom" value={nom} required onChange={(e) => setNom(e.target.value)}/><br />
            <label htmlFor="prenom">prenom:</label><br /><input type="text" name="prenom" id="prenom" value={prenom} required onChange={(e) => setPrenom(e.target.value)}/><br />
            <label htmlFor="email">email:</label><br /><input type="mail" name="email" id="email" value={email} required onChange={(e) =>setEmail(e.target.value)}/><br />
            <label htmlFor="number">numero de telephone:</label><br /><input type="number" name="number" id="number" value={telephone} required onChange={(e) =>setTelephone(e.target.value)}/><br />
            <label htmlFor="filiere">filiere:</label><br />
            <select name="fil" id="fil" value={filiere} required onChange={(e) =>setFiliere(e.target.value)}>
                <option value="">Choisir une filiere</option>
                <option value="GLSI">Genie Logiciel et systemes d'information</option>
                <option value="IRS">ingenierie reseau et systemes</option>
                <option value="DSI">DSI</option>
            </select><br />
            <label htmlFor="annee">annee:</label><br /><input type="number" name="annee" id="annee" value={anneeEtude} required onChange={(e) =>setAnneeEtude(e.target.value)}/><br />
            <label htmlFor="groupe">groupe:</label><br /><input type="text" name="groupe" id="groupe" value={groupe} required onChange={(e) =>setGroupe(e.target.value)}/><br />
            <label htmlFor="ville">ville:</label><br /><input type="text" name="ville" id="ville" value={ville} required onChange={(e) =>setVille(e.target.value)}/><br />
            <label htmlFor="image">image:</label><br /><input type="file" name="image" id="image" accept='image/*' value={image} required onChange={(e) => {const fichier = e.target. target.files[0];if (fichier) {setImage(URL.createObjectURL (fichier));}}}/><br />
            <button type="submit" className='btn-submit'>Ajouter</button>
            <button type="reset">Reset</button>
        </form>
    </div>
    );
}
export default StudentForm