import '../styles/questions/Questions.css';
import Propositions from "../components/questions/Propositions"
import Button from "../components/Button";
import {useState} from 'react';
import { dataQuestion } from "../data/datas-questions"

function Questions({ pageActuelle, updatePageActuelle }) {
    const [question, setQuestion] = useState(1)

    let numeroDesQuestions;
    let questionDuTexte;
    let lesPropositions;

    const [numeroQuestionActuelle, setNumeroQuestionActuelle] = useState(0);

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
                    <Propositions propositions={lesPropositions} />
                </div>
                </div>
            </div>
            <div className="bouttons">
                <div className="annuler">ANNULER</div>
                <Button text="Valider" color="#4CBA4A" id="valider" linkTo={() => setNumeroQuestionActuelle(questionDuTexte++)} />
            </div>
        </div>
    )
}

export default Questions;