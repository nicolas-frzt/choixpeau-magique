import "../styles/Choixpeau.css";
import Boutton from "../components/Button"
import {useState} from 'react';

function Choixpeau({ pageActuelle, updatePageActuelle, maisonFinale, setMaisonFinale }) {
    const [nom, setName] = useState('');
    
    const handle = () => {
        localStorage.setItem('Name', nom);
    };

    if (localStorage.getItem("Nom") !== "") {
        updatePageActuelle('Page User')
    } else {
        return(
            <div className="choixpeau">
                <div className="contenu">
                    <h1>Bienvenue</h1>
                    <input type="text" autoFocus={true} onChange={
                        (e) => { setName(e.target.value); }
                        } value={nom} onKeyDown={
                            (touche) => {
                                const valeur = touche.keyCode;
                                if (valeur === 13) {
                                    handle()
                                    updatePageActuelle('PageUser');
                                }
                            }                        
                        }/>
                </div>
                {nom !== '' && (
                <div className="bouttons" onClick={handle}>
                    <Boutton text="Commencer" linkTo={() => updatePageActuelle('PageUser')} />
                </div>
                )}
            </div>
        )
    }
}

export default Choixpeau;