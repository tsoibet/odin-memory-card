export default function Card(props) {
  if (props.isGameEnd) {
    return (
      <div id={props.id} className="Card">
        <img src={props.src} />
      </div>
    );
  } else {
    return (
      <div id={props.id} className="Card" onClick={() => props.handleCardClick(props.id)}>
        <img src={props.src} />
      </div>
    );
  }
}