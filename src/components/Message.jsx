export default function Message(props) {
  let announceGameResult = "";
  if (props.isWin) {
    announceGameResult += "Congratulations! You won the game!";
  } else {
    announceGameResult += "Game Over! You scored " + props.currentScore + ".";
  }
  let announceNewRecord = "";
  if (props.isBestScore) {
    announceNewRecord += "You just broke your own record!"
  }
  if (props.isGameEnd) {
    return (
      <div className="gameEnd">
        <div>{announceGameResult}</div>
        <div>{announceNewRecord}</div>
        <div className="restart button" onClick={props.restart}>Try again</div>
      </div>
    );
  }
}