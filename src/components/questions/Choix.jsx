import "../../styles/questions/Propositions.css";

function Choix({ proposition, rang }) {
    return(
        <div className="choix">
            <div className="number">
                <h4>{rang}</h4>
            </div>
            <h4>{proposition}</h4>
        </div>
    )
}

export default Choix;