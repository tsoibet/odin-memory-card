export default function ScoreBoard(props) {

  return (
    <div className="ScoreBoard">
      <div className="current score">
        Current Score: {props.currentScore}
      </div>
      <div className="best score">
        Best Score: {props.currentScore > props.bestScore ? props.currentScore : props.bestScore}
      </div>
    </div>
  );
  
}