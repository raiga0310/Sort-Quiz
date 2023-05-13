import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import PlayScreen from "./components/PlayScreen";
import ResultScreen from"./components/ResultScreen";
import LeaderBoard from "./components/LeaderBoard";
import './App.css';

function App() {
  const [screen, setScreen] = useState("start");
  const [player, setPlayer] = useState({ name: "", score: undefined });
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(savedPlayers);
  }, []);

  const startQuiz = (name) => {
    setPlayer({ name, score: 0.0 });
    setScreen("play");
  };

  const endQuiz = (score) => {
    const newPlayer = { ...player, score };
    const newPlayers = [...players, newPlayer].sort((a, b) => b.score - a.score);
    setPlayers(newPlayers);
    localStorage.setItem("players", JSON.stringify(newPlayers));
    setScreen("result");
  };

  const resetQuiz = () => {
    setPlayer({ name: "", score: undefined });
    setScreen("start");
  };

  return (
    <div className="App">
      {screen === "start" && <StartScreen onStart={startQuiz} />}
      {screen === "play" && <PlayScreen player={player} onEnd={endQuiz} />}
      {screen === "result" && (
        <>
          <ResultScreen player={player} onReset={resetQuiz} />
          <LeaderBoard players={players} currentPlayer={player.name} />
        </>
      )}
    </div>
  );
}

export default App;
