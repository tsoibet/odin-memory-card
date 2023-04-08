import { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import Card from './Card';
import Message from './Message';
import card01 from '../resources/card-01.jpg';
import card02 from '../resources/card-02.jpg';
import card03 from '../resources/card-03.jpg';
import card04 from '../resources/card-04.jpg';
import card05 from '../resources/card-05.jpg';
import card06 from '../resources/card-06.jpg';
import card07 from '../resources/card-07.jpg';
import card08 from '../resources/card-08.jpg';
import card09 from '../resources/card-09.jpg';
import card10 from '../resources/card-10.jpg';
import card11 from '../resources/card-11.jpg';
import card12 from '../resources/card-12.jpg';

export default function Game() {

  const cards = [
    {id: 0, src: card01}, 
    {id: 1, src: card02}, 
    {id: 2, src: card03}, 
    {id: 3, src: card04},
    {id: 4, src: card05},
    {id: 5, src: card06},
    {id: 6, src: card07},
    {id: 7, src: card08},
    {id: 8, src: card09},
    {id: 9, src: card10},
    {id: 10, src: card11},
    {id: 11, src: card12}
  ];
  const orderArray = [];
  for (let i = 0; i < cards.length; i++) {
    orderArray.push(i);
  }
  const [cardOrder, setCardOrder] = useState(orderArray);
  const [clickedCards, setClickedCards] = useState([]);

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [isGameEnd, setIsGameEnd] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isBestScore, setIsBestScore] = useState(false);

  useEffect(() => shuffleCards(), [clickedCards]);

  function shuffleCards() {
    const randomizedOrder = cardOrder
      .map(x => ({x, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({x}) => x);
    setCardOrder(randomizedOrder);
  }

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setIsGameEnd(true);
      updateBestScore(currentScore, bestScore);
    } else {
      if ((currentScore + 1) === cards.length) {
        setIsWin(true);
        setIsGameEnd(true);
        setCurrentScore(cards.length);
        updateBestScore(cards.length, bestScore);
        return;
      }
      setClickedCards(clickedCards.concat(id));
      setCurrentScore(currentScore + 1);
    }
  }

  function updateBestScore(currentScore, bestScore) {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setIsBestScore(true);
    }
  }

  function restart() {
    setIsGameEnd(false);
    setIsWin(false);
    setIsBestScore(false);
    setClickedCards([]);
    setCurrentScore(0);
  }

  return (
    <div className="Game">
      <ScoreBoard bestScore={bestScore} currentScore={currentScore} />
      <div className="cards">
        <div className={isGameEnd ? "screen greyout" : "screen"}></div>
        {cardOrder.map(order => 
        <Card 
          key={cards[order].id} 
          id={cards[order].id} 
          src={cards[order].src} 
          isGameEnd={isGameEnd} 
          handleCardClick={handleCardClick} 
        />)}
        <Message 
          isGameEnd={isGameEnd} 
          isWin={isWin} 
          isBestScore={isBestScore} 
          currentScore={currentScore} 
          restart={restart} 
        />
      </div>
    </div>
  );
}