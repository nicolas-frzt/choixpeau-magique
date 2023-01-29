import "../../styles/questions/Propositions.css";
import { dataQuestion } from "../../data/datas-questions"
import { useState } from "react";
import { useEffect } from "react";

function Propositions( {setChoix, choix, setNumeroQuestionActuelle, numeroQuestionActuelle} ) {
    const [valeurSelectionnee, setValeurSelectionnee] = useState('');

    const [darkBackground1, setDarkBackground1] = useState(false);
    const [darkBackground2, setDarkBackground2] = useState(false);
    const [darkBackground3, setDarkBackground3] = useState(false);
    const [darkBackground4, setDarkBackground4] = useState(false);
    useEffect(() => {
        setDarkBackground1(false);
        setDarkBackground2(false);
        setDarkBackground3(false);
        setDarkBackground4(false);
    }, [dataQuestion[numeroQuestionActuelle].propositions[0].nomChoix] || dataQuestion[numeroQuestionActuelle].propositions[1].nomChoix || dataQuestion[numeroQuestionActuelle].propositions[2].nomChoix || dataQuestion[numeroQuestionActuelle].propositions[3].nomChoix);
    
    function divClicked(e) {
        setValeurSelectionnee(e.target.getAttribute('data-value'));
        const target = e.target;
        const id = target.getAttribute('id');

        if (id === 'div1') {
            setDarkBackground1(!darkBackground1);
            setDarkBackground2(false);
            setDarkBackground3(false);
            setDarkBackground4(false);
        } else if (id === 'div2') {
            setDarkBackground1(false);
            setDarkBackground2(!darkBackground2);
            setDarkBackground3(false);
            setDarkBackground4(false);
        } else if (id === 'div3') {
            setDarkBackground1(false);
            setDarkBackground2(false);
            setDarkBackground3(!darkBackground3);
            setDarkBackground4(false);
        } else if (id === 'div4') {
            setDarkBackground1(false);
            setDarkBackground2(false);
            setDarkBackground3(false);
            setDarkBackground4(!darkBackground4);
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setChoix(valeurSelectionnee);
        // if oneOfTheDiv is selected :
        setNumeroQuestionActuelle(numeroQuestionActuelle + 1)
    }


    return (
        <form className="propositions-container" onSubmit={handleSubmit}>
            <input type="hidden" name="choix" value={valeurSelectionnee} />
            <div className="propositions">
            <div
                className="choix"
                data-value="Poufsouffle"
                id="div1"
                onClick={divClicked}
                style={{ backgroundColor: darkBackground1 ? '#aaa' : '#ccc' }}
            >
                {dataQuestion[numeroQuestionActuelle].propositions[0].nomChoix}
            </div>
            <div
                className="choix"
                data-value="Serdaigle"
                id="div2"
                onClick={divClicked}
                style={{ backgroundColor: darkBackground2 ? '#aaa' : '#ccc' }}
            >
                {dataQuestion[numeroQuestionActuelle].propositions[1].nomChoix}
            </div>
            <div
                className="choix"
                data-value="Serpentard"
                id="div3"
                onClick={divClicked}
                style={{ backgroundColor: darkBackground3 ? '#aaa' : '#ccc' }}
            >
                {dataQuestion[numeroQuestionActuelle].propositions[2].nomChoix}
            </div>
            <div
                className="choix"
                data-value="Gryffondor"
                id="div4"
                onClick={divClicked}
                style={{ backgroundColor: darkBackground4 ? '#aaa' : '#ccc' }}
            >
                {dataQuestion[numeroQuestionActuelle].propositions[3].nomChoix}
            </div>
            </div>
            <button type="submit">VALIDER</button>
        </form>
    )
}

export default Propositions;