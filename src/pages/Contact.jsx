import Card from "../components/contact/Card"
import Formulaire from "../components/contact/Formulaire";
import Footer from "../components/Footer";
import "../styles/contact/Contact.css"


function Contact({ pageActuelle, updatePageActuelle }) {
    return(
        <div className="contact">
            <Formulaire />
            <div className="card-container">
                <Card imgSrc="https://pngimg.com/uploads/github/github_PNG40.png" reseau="GitHub" name="Nicos-08" imgAlt="Logo GitHub" linkTo="https://github.com/Nicos-08/choixpeau-magique" />
                <Card imgSrc="https://www.pnglib.com/wp-content/uploads/2020/08/new-black-instagram-logo-2020_5f45b7b3c51e4-680x680.png" imgAlt="Logo instagram" linkTo="https://www.instagram.com/nicolas_loul/" name="nicolas_loul" reseau="Instagram"  />
                <Card imgSrc="https://www.shareicon.net/data/512x512/2015/09/22/644496_email_512x512.png" imgAlt="Logo e-mail" linkTo="mailto:nicolas.franzetti@outlook.fr" name="nicolas.franzetti@outlook.fr" reseau="Mail" />
            </div>
            <Footer contactVisible={false} pageActuelle={pageActuelle} updatePageActuelle={updatePageActuelle} />
        </div>
    )
}

export default Contact;