import '../styles/PageUser.css';
import Boutton from '../components/Button';

function PageUser() {
    let imgSrc;
    let imgAlt
    let maison = localStorage.getItem('Maison');
    if (maison === "Gryffondor") {
        imgSrc = "http://orlandoinformer.com/wp-content/uploads/2014/02/Gryffindor-Common-room.jpg"
        imgAlt = "Salle commune de Gryffondor"
    } else if (maison === "Serdaigle") {
        imgSrc = "https://i.pinimg.com/736x/a4/55/1d/a4551d1263f85b732f7a15d9ca3fbc8d.jpg"
        imgAlt = "Salle commune de Serdaigle"
    } else if (maison === "Poufsouffle") {
        imgSrc = "https://i.pinimg.com/originals/fc/a4/e7/fca4e7f8bdacfd92efe9f314935b9915.jpg"
        imgAlt = "Salle commune de Poufsouffle"
    } else if (maison === "Serpentard") {
        imgSrc = "https://media.harrypotterfanone.com/slytherin-common-room.jpg"
        imgAlt = "Salle commune de Serpentard"
    } else {
        imgSrc = "https://i.pinimg.com/originals/c3/ec/69/c3ec6968463715619f00a11227352b7f.jpg"
        imgAlt = "Grande Salle de Poudlard"
    }
    return (
        <div className="pageUser">
            <img src={imgSrc} alt={imgAlt} />
            <div className="page">
                <div className="overlay">
                    <h1>{localStorage.getItem("Name")}</h1>
                    <Boutton text="Passer le test" />
                </div>
            </div>
        </div>
    )
}

export default PageUser;