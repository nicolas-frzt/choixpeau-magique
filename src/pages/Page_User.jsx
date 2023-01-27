import '../styles/PageUser.css';
import { maisonsData } from '../data/maisons-data';
import Boutton from '../components/Button';

function PageUser({ updatePageActuelle, maisonFinale, setMaisonFinale  }) {
    let imgSrc;
    let imgAlt
    let maison = localStorage.getItem('Maison');

    function trouverInfo() {
        for (let index = 0; index < maisonsData.length; index++) {
            if (maisonsData[index].maison === maison) {
                return maisonsData[index]
            }
        }
    }

    let objet = trouverInfo();

    if (maison === "") {
        imgSrc = "https://i.pinimg.com/originals/c3/ec/69/c3ec6968463715619f00a11227352b7f.jpg"
        imgAlt = "Grande Salle de Poudlard"
    } else {
        imgSrc = objet.fondEcran
        imgAlt = {maison}
    }
    return (
        <div className="pageUser">
            <img src={imgSrc} alt={imgAlt} />
            <div className="page">
                <div className="overlay">
                    <h1>{localStorage.getItem("Name")}</h1>
                    <Boutton linkTo={() => updatePageActuelle('Questions')} text="Passer le test" />
                </div>
            </div>
        </div>
    )
}

export default PageUser;