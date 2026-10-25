import './App.css'
import StudentCard from './StudentCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const students = [
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
  "image" : "https://media.gettyimages.com/id/673426160/photo/business-life.jpg?s=2048x2048&w=gi&k=20&c=JacYmxtDZ6EmM9ZwmdiAj7Ysk6ZHPCi1_VeDR-Mxw1Q=",
},
{
  "nom" : "ayari",
  "prenom" : "amine",
  "mail" : "aminayari@gmail.com",
  "number" : "+216 15832467",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSI 2D",
  "ville" : "Tunis",
  "image" : "https://media.gettyimages.com/id/673426160/photo/business-life.jpg?s=2048x2048&w=gi&k=20&c=JacYmxtDZ6EmM9ZwmdiAj7Ysk6ZHPCi1_VeDR-Mxw1Q=",
},
{
  "nom" : "zehi",
  "prenom" : "smair",
  "mail" : "samirzehi@gmail.com",
  "number" : "+216 12345678",
  "fil" : "ingenierie reseau et systemes",
  "groupe" : "IRS 2B",
  "ville" : "Chebba",
  "image" : "https://media.gettyimages.com/id/673426160/photo/business-life.jpg?s=2048x2048&w=gi&k=20&c=JacYmxtDZ6EmM9ZwmdiAj7Ysk6ZHPCi1_VeDR-Mxw1Q=",
}
]
function App() {
  return (
    <>
    <Header />
    <Navbar />
      <div className='Student-list'>
        {students.map((student) => ( 
          <StudentCard
            prenom={student.prenom}
            nom ={student.nom}
            key={student.mail}
            number={student.number}
            fil={student.fil}
            groupe={student.groupe}
            ville={student.ville}
            image={student.image}
          />
        ))}
      </div>
    <Footer />
    </>
  );
}

export default App
