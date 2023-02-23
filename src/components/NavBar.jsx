import choixpeauLogo from '../assets/logo-choixpeau-magique.png';
import "../styles/NavBar.css"
import { useState, useEffect } from "react"

function NavBar({ updatePageActuelle }) {

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

    const action = (onglet) => {
        updatePageActuelle(onglet);
        setTimeout(function() {
            window.scrollTo(0,0)
        }, 0)
    }

    const onglet1 = "Accueil";
    const onglet2 = "Choixpeau";
    const onglet3 = "Contact";

    if(width > 710) {
        return(
            <div className="navBar flex">
                <img src={choixpeauLogo} alt="" title='Le choixpeau magique' className='choixpeauLogo' onClick={() => updatePageActuelle(onglet1)} />
                <div className='navLinks'>
                    <ul className='flex'>
                        <li className="accueilTab flex" title={onglet1} onClick={() => action(onglet1) } >
                            <h4><i className="fa-solid fa-house icons"></i>{onglet1}</h4>
                        </li>
                        <li className="choixpeauTab flex" title={onglet2} onClick={() => action(onglet2)}>
                            <h4><i className="fa-solid fa-hat-wizard"></i>{onglet2}</h4>
                        </li>
                        <li className="contactTab flex" title={onglet3} onClick={() => action(onglet3)}>
                            <h4><i className="fa-solid fa-envelope icons"></i>{onglet3}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navBar flex">
                <div className="navLinks">
                    <ul className="flex">
                        <li className="accueilTab flex"title={onglet1} onClick={() => action(onglet1) } >
                            <i className="fa-solid fa-house icons"></i>
                            <h4>{onglet1}</h4>
                        </li>
                        <li className="choixpeauTab flex" title={onglet2} onClick={() => action(onglet2)}>
                            <i className="fa-solid fa-hat-wizard"></i>
                            <h4>{onglet2}</h4>
                        </li>
                        <li className="contactTab flex" title={onglet3} onClick={() => action(onglet3)}>
                            <i className="fa-solid fa-envelope icons"></i>
                            <h4>{onglet3}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar