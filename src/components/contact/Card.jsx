import "../../styles/contact/Card.css";

function Card({ imgSrc, imgAlt, reseau, linkTo, name }) {
    return (
        <div className="card">
            <div className="imgBox">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="contenu">
                <div className="details">
                    <h4>{reseau}</h4>
                    <h5>{name}</h5>
                </div>
                <div className="bouttons">
                    <a href={linkTo} target="_blank" rel="noreferrer">Visiter</a>
                </div>
            </div>
        </div>
    )
}

export default Card;