import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput"
import GuessGrid from "./GuessGrid";
import GameResult from "./GameResult";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("Ongoing");
  const [gridContent, setGridContent] = React.useState([]);
  return (
    <div>
      <GameResult gameStatus={gameStatus}></GameResult>
      <GuessGrid guesses={guesses} gridContent={gridContent} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gridContent={gridContent}
        setGridContent={setGridContent}
        answer={answer}
      />
    </div>
  );
}

export default Game;
