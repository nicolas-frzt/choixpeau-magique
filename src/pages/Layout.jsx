import { useState } from "react";
import NavBar from "../components/NavBar";
import Accueil from "./Accueil";
import Contact from "./Contact";
import Choixpeau from "./Choixpeau";
import PageUser from './Page_User';
import Questions from "./Questions";
import Resultat from "./Resultat";


function Layout() {
    const [pageActuelle, updatePageActuelle] = useState('Questions');
    const [maisonFinale, setMaisonFinale] = useState();    
    // return <Resultat />;
    return(
        <div className="layout">
            <NavBar pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            {/* <Resultat /> */}
             {pageActuelle === 'Accueil' && (
                 <Accueil pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
             )}
             {pageActuelle === 'Contact' && (
                 <Contact pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
             )}
             {pageActuelle === 'Choixpeau' && (
                 <Choixpeau maisonFinale={maisonFinale} setMaisonFinale={setMaisonFinale} pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
             )}
             {pageActuelle === 'PageUser' && (
                 <PageUser maisonFinale={maisonFinale} setMaisonFinale={setMaisonFinale} pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
             )}
             {pageActuelle === 'Questions' && (
                 <Questions maisonFinale={maisonFinale} setMaisonFinale={setMaisonFinale} pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
             )}
        </div>
    )
}

export default Layout;