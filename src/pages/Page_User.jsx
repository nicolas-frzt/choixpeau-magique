import '../styles/PageUser.css';
import { maisonsData } from '../data/maisons-data';
import Boutton from '../components/Button';

function PageUser({ updatePageActuelle }) {
    let imgSrc;
    let imgAlt
    let maison = localStorage.getItem('Maison');

    if (maison === null) {
        imgSrc = "https://i.pinimg.com/originals/c3/ec/69/c3ec6968463715619f00a11227352b7f.jpg"
        imgAlt = "Grande Salle de Poudlard"
    } else {
        let objet = trouverInfo();
        function trouverInfo() {
            for (let index = 0; index < maisonsData.length; index++) {
                if (maisonsData[index].maison === maison) {
                    return maisonsData[index]
                }
            }
        }
        imgSrc = objet.fondEcran
        imgAlt = {maison}
    }

    function reinitialiser() {
        localStorage.removeItem('Maison');
        localStorage.removeItem('Name');
        updatePageActuelle("Choixpeau")
    }

    return (
        <div className="pageUser">
            <img src={imgSrc} alt={imgAlt} />
            <div className="page">
                <div className="overlay">
                    <h1>{localStorage.getItem("Name")}</h1>
                    {localStorage.getItem("Maison") === null ? <Boutton linkTo={() => updatePageActuelle('Questions')} text="Passer le test" />
                    : <Boutton linkTo={() => reinitialiser()} text="Recommencer le test" />}
                </div>
            </div>
        </div>
    )
}

export default PageUser;