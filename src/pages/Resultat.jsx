import "../styles/Resultat.css";
import { Link } from "react-scroll";
import Button from '../components/Button.jsx'
import Celebrites from '../components/Celebrites.jsx';
import TitreTexteCtaImg from "../components/TitreTexteCtaImg.jsx"
import Footer from '../components/Footer.jsx'
import DumbledorePhoto from "../assets/dumbledore-resultat.png"
import { maisonsData } from '../data/maisons-data';
import { useEffect } from "react";
import  { useState } from "react";

function Resultat({ maisonFinale, setMaisonFinale, updatePageActuelle }) {
    localStorage.setItem('Maison', maisonFinale);
    const [affichage, setAffichage] = useState("")

    function trouverInfo () {
        for (let index = 0; index < maisonsData.length; index++) {
            if (maisonsData[index].maison === maisonFinale) {
                return maisonsData[index]
            }
        }
    }
    
    let objet = trouverInfo();

    const generateRandomString = (num) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result1= ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result1;
    }

    useEffect(() => {
        let intervalId = setInterval(() => {
            setAffichage(generateRandomString(11));
        }, 80);

        setTimeout(() => {
            clearInterval(intervalId);
            setAffichage(maisonFinale);
        }, 3000);
    }, [maisonFinale]);

    return (
        <div className="resultat">
            <div className="hautPage">
                <img src={objet.fondEcran} alt="" />
                <div className="overlayResultat">
                    <div className="info">
                        <img src="https://www.pixiegames.fr/1399-large_default/choixpeau-magique-harry-potter.jpg" alt="" />
                        <h1>{`${affichage} !`}</h1>
                    </div>
                    <Link className="lien" to="ancre">
                        <i className="fa-solid fa-circle-arrow-down"></i>
                    </Link>
                </div>
            </div>
            <div id="ancre"></div>
            <div className="basPage">
                <div className="dumbledoreParle">
                    <img src={DumbledorePhoto} alt="Professeur Dumbledore" />
                    <div className="bulle">
                        <div className="triangle"></div>
                        <div className="contenu bubble">
                            <h3>{`Bienvenue à ${localStorage.getItem('Maison')}, ${localStorage.getItem('Name')}${objet.resume}`}</h3>
                        </div>
                    </div>
                </div>
                <div className="bouttons">
                    <Button text="Partager !" color="black" />
                </div>
                <TitreTexteCtaImg
                    cta={false}
                    texte={objet.historique}
                    titre={`Historique`}
                    imgSrc={objet.fondEcran}
                    imgAlt={`Logo de ${maisonFinale}`}
                />
                <Celebrites celebrites={objet.celebrites} />
                <div className="bouttons" id="retour" >
                    <Button text="Retour au profil" linkTo={() => updatePageActuelle('PageUser')} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

Resultat.defaultProps = {
    maisonFinale: "Aucune maison"
}

export default Resultat;