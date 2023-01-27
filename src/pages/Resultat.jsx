import '../styles/Resultat.css';
import { Link } from "react-scroll";
import Button from '../components/Button.jsx'
import Celebrites from '../components/Celebrites.jsx';
import TitreTexteCtaImg from "../components/TitreTexteCtaImg.jsx"
import Footer from '../components/Footer.jsx'
import DumbledorePhoto from "../assets/dumbledore-resultat.png"
import { maisonsData } from '../data/maisons-data';

function Resultat({ maisonFinale, setMaisonFinale }) {
    localStorage.setItem('Maison', maisonFinale);

    function trouverInfo() {
        for (let index = 0; index < maisonsData.length; index++) {
            if (maisonsData[index].maison === maisonFinale) {
                return maisonsData[index]
            }
        }
    }

    let objet = trouverInfo()

    return (
        <div className="resultat">
            <div className="hautPage">
                <div className="photo">
                    <div className="logoPlusMaison">
                        <img src="https://www.pixiegames.fr/1399-large_default/choixpeau-magique-harry-potter.jpg" alt="" />
                        <h1>{`${maisonFinale} !`}</h1>
                        {/* Faire avec un effet stylé : des lettres aléatoires arrivent et se mélangent très vite, l'arrière plan arrive tout doucement puis au bout de 3s le choixpeau annonce la maison, le texte aussi et l'arrière-plan correspond. */}
                    </div>
                    <Link to="ancre">
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
                            <h3>{objet.resume}</h3>
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
                    <Button text="Retour au profil" />
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