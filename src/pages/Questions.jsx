import { useState } from "react";

function Questions() {
    const [questionActuelle, updateQuestionActuelle] = useState("1");

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

export default Questions;