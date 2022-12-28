import "../../styles/questions/Propositions.css";
import Choix from "./Choix"

function Propositions(propositions) {
    console.log(propositions.propositions);
    return (
        <div className="propositions-container">
            <div className="propositions">
                <Choix proposition={propositions.propositions[0].nomChoix} rang="1" />
                <Choix proposition={propositions.propositions[1].nomChoix} rang="2" />
                <Choix proposition={propositions.propositions[2].nomChoix} rang="3" />
                <Choix proposition={propositions.propositions[3].nomChoix} rang="4" />
            </div>
        </div>
    )
}

export default Propositions;