import '../styles/questions/Questions.css';
import Propositions from "../components/questions/Propositions.jsx"
import { useState } from 'react';
import { useEffect } from 'react';
import { dataQuestion } from "../data/datas-questions"

function Questions({ pageActuelle, updatePageActuelle }) {
    const [choix, setChoix] = useState();

    let numeroDesQuestions;
    let questionDuTexte;
    let lesPropositions;

    const [numeroQuestionActuelle, setNumeroQuestionActuelle] = useState(0);
    
    const [gryffondorPnts, addGryffondorPnts] = useState(0);
    const [serpentardPnts, addSerpentardPnts] = useState(0);
    const [serdaiglePnts, addSerdaiglePnts] = useState(0);
    const [poufsoufflePnts, addPoufsoufflePnts] = useState(0);

    useEffect(() => {
        if (choix === "serdaigle") {
            addSerdaiglePnts(serdaiglePnts + 1);
        } else if (choix === "serpentard") {
            addSerpentardPnts(serpentardPnts + 1);
        } else if (choix === "poufsouffle") {
            addPoufsoufflePnts(poufsoufflePnts + 1);
        } else if (choix === "gryffondor") {
            addGryffondorPnts(gryffondorPnts + 1);
        } else {
            console.log("Aucune maison sélectionnée.");
        }
    }, [choix])
    
    useEffect(() => {
        console.log(`Serdaigle : ${serdaiglePnts}`)
        console.log(`Serpentard : ${serpentardPnts}`)
        console.log(`Gryffondor : ${gryffondorPnts}`)
        console.log(`Poufsouffle : ${poufsoufflePnts}`)
    }, [serdaiglePnts, serpentardPnts, poufsoufflePnts, gryffondorPnts])
    
    

    let indice = 0;

    while (indice < dataQuestion.length) {
        numeroDesQuestions = dataQuestion[indice].numeroQuestion;
        questionDuTexte = dataQuestion[indice].question;
        lesPropositions = dataQuestion[indice].propositions;
        indice++;
        if (numeroQuestionActuelle > indice) {
            continue;
        }
    }

    
    return(
        <div className="question">
            <div className="question-container">
                <img src="http://img4.wikia.nocookie.net/__cb20150403174653/harrypotter/fr/images/d/d9/Choixpeau_magique.png" alt="Le Choixpeau magique" />
                <div className="cote-droit">
                    <h2>{`Question ${numeroDesQuestions} sur ${dataQuestion.length}`}</h2>
                    <div className="bulle">
                        <div className="contenu bubble">
                            <h3>{questionDuTexte}</h3>
                        </div>
                    </div>
                    <Propositions setChoix={setChoix} choix={choix} />
                </div>
            </div>
            <div className="bouttons">
                <div className="annuler">ANNULER</div>
            </div>
        </div>
    )
}

export default Questions;