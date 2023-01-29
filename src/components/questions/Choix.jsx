import { useEffect } from "react";
import "../../styles/questions/Propositions.css";

function Choix({ proposition, rang, gryffondorPnts, serpentardPnts, serdaiglePnts, poufsoufflePnts, addGryffondorPnts, addSerpentardPnts, addSerdaiglePnts, addPoufsoufflePnts }) {
    let nomDuChoix = proposition.nomChoix;
    let point = proposition.pointPour;
    let maisonPoint;

    // useEffect(() => {
        if (point === "Poufsouffle") {
            maisonPoint = poufsoufflePnts++
        } else if (point === "Serdaigle") {
            maisonPoint = addSerdaiglePnts(serdaiglePnts + 1)
        } else if (point === "Serpentard") {
            maisonPoint = addSerpentardPnts(serpentardPnts + 1)
        } else if (point === "Gryffondor") {
            maisonPoint = addGryffondorPnts(gryffondorPnts + 1)
        }
    // }, [poufsoufflePnts, serdaiglePnts, serpentardPnts, gryffondorPnts])
    
    return(
        <div className="choix" >
            <div className="number">
                <h4>{rang}</h4>
            </div>
            <h4>{nomDuChoix}</h4>
        </div>
    )
}

export default Choix;