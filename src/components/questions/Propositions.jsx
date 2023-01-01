import "../../styles/questions/Propositions.css";
import Choix from "./Choix"

function Propositions({ propositions, gryffondorPnts, serpentardPnts, addGryffondorPnts, serdaiglePnts, poufsoufflePnts, addSerpentardPnts, addSerdaiglePnts, addPoufsoufflePnts }) {
    return (
        <div className="propositions-container">
            <div className="propositions">
                <Choix proposition={propositions[0]} rang="1" gryffondorPnts={gryffondorPnts} serpentardPnts={serpentardPnts} serdaiglePnts={serdaiglePnts} poufsoufflePnts={poufsoufflePnts} addGryffondorPnts={addGryffondorPnts} addSerpentardPnts={addSerpentardPnts} addSerdaiglePnts={addSerdaiglePnts} addPoufsoufflePnts={addPoufsoufflePnts} />
                {/* <Choix proposition={propositions[1]} rang="2" gryffondorPnts={gryffondorPnts} serpentardPnts={serpentardPnts} serdaiglePnts={serdaiglePnts} poufsoufflePnts={poufsoufflePnts} addGryffondorPnts={addGryffondorPnts} addSerpentardPnts={addSerpentardPnts} addSerdaiglePnts={addSerdaiglePnts} addPoufsoufflePnts={addPoufsoufflePnts} />
                <Choix proposition={propositions[2]} rang="3" gryffondorPnts={gryffondorPnts} serpentardPnts={serpentardPnts} serdaiglePnts={serdaiglePnts} poufsoufflePnts={poufsoufflePnts} addGryffondorPnts={addGryffondorPnts} addSerpentardPnts={addSerpentardPnts} addSerdaiglePnts={addSerdaiglePnts} addPoufsoufflePnts={addPoufsoufflePnts} />
                <Choix proposition={propositions[3]} rang="4" gryffondorPnts={gryffondorPnts} serpentardPnts={serpentardPnts} serdaiglePnts={serdaiglePnts} poufsoufflePnts={poufsoufflePnts} addGryffondorPnts={addGryffondorPnts} addSerpentardPnts={addSerpentardPnts} addSerdaiglePnts={addSerdaiglePnts} addPoufsoufflePnts={addPoufsoufflePnts} /> */}
            </div>
        </div>
    )
}

export default Propositions;