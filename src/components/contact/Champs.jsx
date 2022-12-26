import {TextField} from "@mui/material";
import { useState } from "react";
import "../../styles/contact/Formulaire.css"
import Button from '@mui/material/Button';

function Champs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    function validation(e) {
        e.preventDefault();
        const mailtoLink = `mailto:nicolas.franzetti@outlook.fr?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
    }
    
    return (
        <form className="champs" onSubmit={validation}>
            <TextField className="petit" id="outlined-basic" value={name} label="Nom" variant="outlined" type="texte" onChange={(e) => setName(e.target.value)} />
            <TextField className="petit" id="outlined-basic" value={email} label="Adresse mail" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            <TextField className="petit" id="outlined-basic" value={subject} label="Sujet" type="text" variant="outlined" onChange={(e) => setSubject(e.target.value)} />
            <TextField
                id="outlined-multiline-static"
                label="Attention, les retours à la lignes ne seront pas pris en compte"
                multiline
                rows={14}
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button variant="contained" type="submit">
                Envoyer
            </Button>
        </form>

    )
}

export default Champs;