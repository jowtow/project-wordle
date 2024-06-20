import { checkGuess } from "../../game-helpers.js";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js"

function GuessInput(props) {
  const setGuess = props.setGuess;
  const setGuesses = props.setGuesses;
  const guess = props.guess;
  const guesses = props.guesses;
    let gameStatus = props.gameStatus;
    let gridContent = props.gameStatus;
  function SetGridContent(guesses) {
    const results = guesses.map((x) =>
      checkGuess(x.guess.map((y) => y.letter).join(""), props.answer)
    );

    gridContent = results.map((x) => ({
      letters: x.map(y => ({...y, key: crypto.randomUUID()})),
      key: crypto.randomUUID(),
    }));
    props.setGridContent(gridContent);
  }

  function SetGameStatus(){
    var isGameWon = gridContent.some(x => x.letters.every(y => y.status === "correct"));
    var isGameStillGoing = !isGameWon && guesses.length < NUM_OF_GUESSES_ALLOWED - 1

    if(isGameWon){
        gameStatus= "Won"
        props.setGameStatus("Won");
    }
    else if (isGameStillGoing){
        gameStatus= "OnGoing"

        props.setGameStatus("OnGoing");
    }
    else{
        gameStatus="Lost"
        props.setGameStatus("Lost")
    }
  }

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          const guessLetters = guess
            .split("")
            .map((x) => ({ letter: x, key: crypto.randomUUID() }));
          const guessObj = { guess: guessLetters, key: crypto.randomUUID() };
          setGuesses([...guesses, guessObj]);
          SetGridContent([...guesses, guessObj]);
          SetGameStatus();
          console.log(gameStatus)
          setGuess("");
          e.preventDefault();
        }}
      >
        <label htmlFor="guess-input">Enter a guess:</label>
        <input
          type="text"
          name="guess-input"
          pattern="[a-zA-Z]{5}"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          disabled={gameStatus === "Won" || gameStatus === "Lost" ? "disabled" : ""}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
