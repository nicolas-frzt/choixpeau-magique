import Button from "./Button.jsx";
import "../styles/TitreTexteCtaImg.css";
import React, { useState, useEffect } from 'react';

function TitreTexteCtaImg( {titre, texte, ctaTexte, ctaLinkTo, imgSrc, imgAlt, inverse, cta} ) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    if (width > 1200) {
        return (
            <section className="titreTexteCtaImg" id={titre} style={inverse ? {flexDirection: "row-reverse"} : null}>
                <div className="text">
                    <h2>{titre}</h2>
                    <p>{texte}</p>
                    {cta === true ? <Button text={ctaTexte} linkTo={ctaLinkTo} /> : null}
                </div>
                <img src={imgSrc} alt={imgAlt} />
            </section>
        )
    } else {
        return (
            <section className="titreTexteCtaImg" id={titre}>
                <h2>{titre}</h2>
                <img src={imgSrc} alt={imgAlt} />
                <p>{texte}</p>
                {cta === true ? <Button text={ctaTexte} linkTo={ctaLinkTo} /> : null}
            </section>
    )}
}

// import PropTypes from 'prop-types';
// TitreTexteCtaImg.PropTypes = {
//     titre: PropTypes.string,
//     texte, ctaTexte, ctaLinkTo, imgSrc, imgAlt, inverse
// }
//
TitreTexteCtaImg.defaultProps = {
    cta: true
}

export default TitreTexteCtaImg;