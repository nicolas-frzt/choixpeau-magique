import Button from "./Button.jsx";
import "../styles/TitreTexteCtaImg.css";


function TitreTexteCtaImg( {titre, texte, ctaTexte, ctaLinkTo, imgSrc, imgAlt, inverse, cta} ) {
    return (
        <section className="titreTexteCtaImg" id={titre} style={inverse ? {flexDirection: "row-reverse"} : null}>
            <div className="text">
                <h2>{titre}</h2>
                <p>{texte}</p>
                {cta == true ? <Button text={ctaTexte} linkTo={ctaLinkTo} /> : null}
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