export default function Card(props) {
  if (props.isGameEnd) {
    return (
      <div id={props.id} className="Card">
        <img src={props.src} alt={`card${props.id}`} />
      </div>
    );
  } else {
    return (
      <div id={props.id} className="Card" onClick={() => props.handleCardClick(props.id)}>
        <img src={props.src} alt={`card${props.id}`} />
      </div>
    );
  }
}