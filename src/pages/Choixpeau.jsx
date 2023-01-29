import "../styles/Choixpeau.css";
import Boutton from "../components/Button"
import {useState} from 'react';
import PageUser from "./Page_User";

function Choixpeau({ pageActuelle, updatePageActuelle, maisonFinale, setMaisonFinale, nom, setName }) {
   
    const handle = () => {
        localStorage.setItem('Name', nom);
    };

    let nomUser = localStorage.getItem("Name");

    if (nomUser === "" || nomUser === null) {
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
                <div className="bouttons" onClick={handle}>
                    <Boutton text="Commencer" linkTo={() => updatePageActuelle('PageUser')} />
                </div>
            </div>
        )
    } else {
        return <PageUser updatePageActuelle={updatePageActuelle} />
    }
}

export default Choixpeau;