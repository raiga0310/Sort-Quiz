import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import PlayScreen from './components/PlayScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState("start"); // 初期状態は "start"
  const [player, setPlayer] = useState({ name: "", score: undefined }); // プレイヤー名を管理するためのstate

  const startQuiz = (name) => {
    setPlayer({name, score: 0.0}); // プレイヤー名を更新
    setScreen("play"); // 画面状態を "play" に更新
  };

  const endQuiz = (score) => {
    // スコアに基づいてランキングを更新するロジックをここに記述...
    setScreen("result"); // 画面状態を "result" に更新
  };

  const resetQuiz = () => {
    setPlayer({name: "", score: undefined}); // プレイヤー名をリセット
    setScreen("start"); // 画面状態を "start" に更新
  };

  return (
    <div className="App">
      {screen === "start" && <StartScreen onStart={startQuiz} />}
      {screen === "play" && <PlayScreen player={player} onEnd={endQuiz} />}
      {screen === "result" && <ResultScreen playerName={player.name} onReset={resetQuiz} />}
    </div>
  );
}

export default App;