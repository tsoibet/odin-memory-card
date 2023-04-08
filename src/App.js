import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        Memory Game
      </div>
      <Game />
      <div className="footer">
        Created by tsoibet @ The Odin Project 2023
      </div>
    </div>
  );
}

export default App;
