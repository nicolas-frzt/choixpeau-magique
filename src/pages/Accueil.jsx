import "../styles/Accueil.css";
import { Link } from "react-scroll";
import TitreTexteCtaImg from "../components/TitreTexteCtaImg";
import choixpeauVideo from "../assets/Choixpeau-video.mp4";
import Footer from "../components/Footer";

function Accueil({ pageActuelle, updatePageActuelle }) {
    return(
        <div className="accueil">
            <div className="landingPage">
                <video autoPlay={true} muted={true} src={choixpeauVideo} loop={true}></video>
                <div className="overlay">
                    <h1>LE CHOIXPEAU</h1>
                    <Link to="ancre">
                        <i className="fa-solid fa-circle-arrow-down"></i>
                    </Link>
                </div>
            </div>
            <div id="ancre"></div>
            <TitreTexteCtaImg
                ctaLinkTo={() => updatePageActuelle("Choixpeau")}
                titre="Découvre ta maison"
                texte= {`Tu es un fan d'Harry Potter et tu t'es toujours demandé dans quelle maison tu serais classé à Poudlard ? Grâce à notre Choixpeau magique, tu pourras enfin savoir si tu es un Gryffondor, un Serpentard, un Poufsouffle ou un Serdaigle ! Clique sur le bouton "Commencer le test" pour découvrir ta maison à Poudlard.`}
                imgAlt="Les 4 maisons de Poudlard"
                imgSrc="https://www.pausecafein.fr/images/cafein/2019/01/geek-poudlard-france-maisons/geek-poudlard-college-france-maisons.jpg?v=1548926253"
                ctaTexte="Commencer le test"
                inverse={false}
            />
            <TitreTexteCtaImg
                ctaLinkTo={() => updatePageActuelle("Choixpeau")}
                titre="Un quiz amusant"
                texte= {`Passe un bon moment en répondant à nos questions. Tu pourras découvrir tes qualités et tes préférences en te surprenant toi-même ! Alors n'hésite plus et clique sur le bouton "Commencer le test" !`}
                imgAlt="Harry Potter, Ron Weasley et Hermione Granger en train de se poser des questions sur un livre"
                imgSrc="https://cache.cosmopolitan.fr/data/photo/w1000_ci/5y/harry-potter-boutique-new-york.webp"
                ctaTexte="Commencer le test"
                inverse={true}
            />
            <Footer pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} contactVisible={true} />
        </div>
    )
}

export default Accueil;