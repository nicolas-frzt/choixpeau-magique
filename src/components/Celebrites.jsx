import "../styles/Celebrites.css";

function Celebrites (celebrites) {
    console.log(celebrites);
    return (
        <div className="celebres">
            <h2>Célèbres</h2>
            <div className="container">
                <div className="card">
                    <img src={celebrites.celebrites[0].photo} alt={celebrites.celebrites[0].nom} />
                    <h5>{celebrites.celebrites[0].nom}</h5>
                </div>
                
                <div className="card">
                    <img src={celebrites.celebrites[1].photo} alt={celebrites.celebrites[1].nom} />
                    <h5>{celebrites.celebrites[1].nom}</h5>
                </div>
                
                <div className="card">
                    <img src={celebrites.celebrites[2].photo} alt={celebrites.celebrites[2].nom} />
                    <h5>{celebrites.celebrites[2].nom}</h5>
                </div>
                
                <div className="card">
                    <img src={celebrites.celebrites[3].photo} alt={celebrites.celebrites[3].nom} />
                    <h5>{celebrites.celebrites[3].nom}</h5>
                </div>
                
            </div>
        </div>
    )
}

export default Celebrites