import Button from "./Button.js";
import "../styles/TitreTexteCtaImg.css";


function TitreTexteCtaImg( {titre, texte, ctaTexte, ctaLinkTo, imgSrc, imgAlt, inverse} ) {
    return (
        <section className="titreTexteCtaImg" id={titre} style={inverse ? {flexDirection: "row-reverse"} : null}>
            <div className="text">
                <h2>{titre}</h2>
                <p>{texte}</p>
                <Button text={ctaTexte} linkTo={ctaLinkTo} />
            </div>
            <img src={imgSrc} alt={imgAlt} />

        </section>
    )
}

// import PropTypes from 'prop-types';
// TitreTexteCtaImg.PropTypes = {
//     titre: PropTypes.string,
//     texte, ctaTexte, ctaLinkTo, imgSrc, imgAlt, inverse
// }
//
// TitreTexteCtaImg.defaultProps = {
//     titre: ""
// }

export default TitreTexteCtaImg;