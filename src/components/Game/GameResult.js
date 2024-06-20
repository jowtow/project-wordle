function GameResult({ gameStatus }) {
  return (
    <div>
      {gameStatus == "Won" && (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
      )} 
      {gameStatus == "Lost" && (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
      )}
    </div>
  );
}

export default GameResult;