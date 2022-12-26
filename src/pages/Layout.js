import { useState } from "react";
import NavBar from "../components/NavBar";
import Accueil from "./Accueil";
import Contact from "./Contact";
import Choixpeau from "../pages/Choixpeau";
import PageUser from '../pages/Page_User';


function Layout() {
    const [pageActuelle, updatePageActuelle] = useState('Accueil');

    return(
        <div className="layout">
            <NavBar pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            {pageActuelle === 'Accueil' && (
                <Accueil pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            )}
            {pageActuelle === 'Contact' && (
                <Contact pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            )}
            {pageActuelle === 'Choixpeau' && (
                <Choixpeau pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            )}
            {pageActuelle === 'PageUser' && (
                <PageUser pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
            )}
        </div>
    )
}

export default Layout;