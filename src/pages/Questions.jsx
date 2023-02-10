import '../styles/questions/Questions.css';
import Propositions from "../components/questions/Propositions.jsx"
import Resultat from './Resultat';
import { useState } from 'react';
import { useEffect } from 'react';
import { dataQuestion } from "../data/datas-questions"

function Questions({ pageActuelle, updatePageActuelle, maisonFinale, setMaisonFinale }) {
    const [choix, setChoix] = useState();
    const [numeroQuestionActuelle, setNumeroQuestionActuelle] = useState(0);
    
    const [gryffondorPnts, addGryffondorPnts] = useState(0);
    const [serpentardPnts, addSerpentardPnts] = useState(0);
    const [serdaiglePnts, addSerdaiglePnts] = useState(0);
    const [poufsoufflePnts, addPoufsoufflePnts] = useState(0);

    useEffect(() => {
        if (choix === "Serdaigle") {
            addSerdaiglePnts(serdaiglePnts + 1);
        } else if (choix === "Serpentard") {
            addSerpentardPnts(serpentardPnts + 1);
        } else if (choix === "Poufsouffle") {
            addPoufsoufflePnts(poufsoufflePnts + 1);
        } else if (choix === "Gryffondor") {
            addGryffondorPnts(gryffondorPnts + 1);
        } else {
        }
        setChoix();
    }, [choix])

    let questionDuTexte;
    let indice = 0;

    while (indice < dataQuestion.length) {
        questionDuTexte = dataQuestion[indice].question;
        indice++;
        if (numeroQuestionActuelle >= indice) {
            continue;
        } else {
            break;
        }
    }

    function annuler() {
        addGryffondorPnts(0);
        addPoufsoufflePnts(0);
        addSerdaiglePnts(0);
        addSerpentardPnts(0);
        updatePageActuelle('PageUser');
    }

    if (numeroQuestionActuelle === dataQuestion.length) {
        if (serdaiglePnts > gryffondorPnts && serdaiglePnts > poufsoufflePnts && serdaiglePnts > serpentardPnts) {
            setMaisonFinale("Serdaigle");
        } else if (poufsoufflePnts > gryffondorPnts && poufsoufflePnts > serdaiglePnts && poufsoufflePnts > serpentardPnts) {
            setMaisonFinale("Poufsouffle");
        } else if (serpentardPnts > gryffondorPnts && serpentardPnts > poufsoufflePnts && serpentardPnts > serdaiglePnts) {
            setMaisonFinale("Serpentard");
        } else if (gryffondorPnts > serpentardPnts && gryffondorPnts > poufsoufflePnts && gryffondorPnts > serdaiglePnts) {
            setMaisonFinale("Gryffondor");
        } else if (serdaiglePnts > poufsoufflePnts && serdaiglePnts > serpentardPnts && gryffondorPnts > poufsoufflePnts && gryffondorPnts > serpentardPnts) {
            // Serdaigle et Gryffondor
            setMaisonFinale("Serdaigle")
        } else if (serdaiglePnts > gryffondorPnts && serdaiglePnts > serpentardPnts && poufsoufflePnts > gryffondorPnts && poufsoufflePnts > serpentardPnts) {
            // Serdaigle et Poufsouffle
            setMaisonFinale("Poufsouffle")
        } else if (serdaiglePnts > gryffondorPnts && serdaiglePnts > poufsoufflePnts && serpentardPnts > gryffondorPnts && serpentardPnts > poufsoufflePnts) {
            // Serdaigle et Serpentard
            setMaisonFinale("Serpentard")
        } else if (serpentardPnts > gryffondorPnts && serpentardPnts > serdaiglePnts && poufsoufflePnts > gryffondorPnts && poufsoufflePnts > serdaiglePnts) {
            // Serpentard et Poufsouffle
            setMaisonFinale("Poufsouffle")
        } else if (serpentardPnts > poufsoufflePnts && serpentardPnts > serdaiglePnts && gryffondorPnts > poufsoufflePnts && gryffondorPnts > serdaiglePnts) {
            // Serpentard et Poufsouffle
            setMaisonFinale("Gryffondor")
        } else if (poufsoufflePnts > serpentardPnts && poufsoufflePnts > serdaiglePnts && gryffondorPnts > serpentardPnts && gryffondorPnts > serdaiglePnts) {
            // Poufsouffle et Gryffondor
            setMaisonFinale("Gryffondor")
        } else if (serdaiglePnts > gryffondorPnts && serpentardPnts > gryffondorPnts && poufsoufflePnts > gryffondorPnts) {
            // Serdaigle, Serpentard et Poufsouffle
            setMaisonFinale("Serdaigle")
        } else if (serpentardPnts > serdaiglePnts && poufsoufflePnts > serdaiglePnts && gryffondorPnts > serdaiglePnts) {
            // Serpentard, Poufsouffle et Gryffondor
            setMaisonFinale("Serpentard")
        } else if (poufsoufflePnts > serpentardPnts && gryffondorPnts > serpentardPnts && serdaiglePnts > serpentardPnts) {
            // Poufsouffle, Gryffondor et Serdaigle
            setMaisonFinale("Serdaigle")
        } else if (gryffondorPnts > poufsoufflePnts && serdaiglePnts > poufsoufflePnts && serpentardPnts > poufsoufflePnts) {
            // Gryffondor, Serdaigle et Serpentard
            setMaisonFinale("Gryffondor")
        }
        return <Resultat maisonFinale={maisonFinale} setMaisonFinale={setMaisonFinale} updatePageActuelle={updatePageActuelle} />;
    } else {
        return(
            <div className="question">
                <div className="question-container">
                    <img src="http://img4.wikia.nocookie.net/__cb20150403174653/harrypotter/fr/images/d/d9/Choixpeau_magique.png" alt="Le Choixpeau magique" />
                    <div className="cote-droit">
                        <h2>{`Question ${numeroQuestionActuelle + 1} sur ${dataQuestion.length}`}</h2>
                        <div className="bulle">
                            <div className="contenu bubble">
                                <h3>{questionDuTexte}</h3>
                            </div>
                        </div>
                        <Propositions setChoix={setChoix} choix={choix} setNumeroQuestionActuelle={setNumeroQuestionActuelle} numeroQuestionActuelle={numeroQuestionActuelle} />
                    </div>
                </div>
                
                <div className="bouttons">
                    <div className="annuler" onClick={annuler}>ANNULER</div>
                </div>
            </div>
        )
    }
    }    

export default Questions;