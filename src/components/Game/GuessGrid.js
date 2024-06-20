import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js"
import { range } from "../../utils";

function GuessGrid(props) {
    console.log(props.gridContent);
  return (
      <div className="guess-results">
        {props.gridContent.map((x) => {
          return (
            <p key={x.key} className="guess">
              {x.letters.map(y => {
                return <span key={y.key} className={`cell ${y.status}`}>{y.letter}</span>
              })}
            </p>
          );
        })}

        {range(0, NUM_OF_GUESSES_ALLOWED - props.guesses.length).map(x =>{
            return (
                <p key={crypto.randomUUID()} className="guess">
                    <span key={crypto.randomUUID()} className="cell"></span>
                    <span key={crypto.randomUUID()} className="cell"></span>
                    <span key={crypto.randomUUID()} className="cell"></span>
                    <span key={crypto.randomUUID()} className="cell"></span>
                    <span key={crypto.randomUUID()} className="cell"></span>
                </p>
            )
        })}
    </div>
  );
}

export default GuessGrid;
