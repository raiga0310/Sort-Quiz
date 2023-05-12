import React, { useState } from 'react';
import CardList from './CardList';  // カードリストコンポーネントをインポート
import '../data/data';
import '../App.css';
import './PlayScreen.css';

function getRandomArray(n) {
  var array = [];
  while (array.length < n) {
    var randomNumber = Math.floor(Math.random() * 63) + 5;
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
}

function PlayScreen({ onAnswer }) {
  const [quizKeyArray, setQuizKeyArray] = useState(getRandomArray(5));

  const handleAnswer = () => {
    // ユーザーの回答を採点する処理
    // ここでは仮に常に正解とする
    const isCorrect = true;
    onAnswer(isCorrect);
  };

  const handleRefresh = () => {
    // Refreshボタンが押されたときに新しい乱数配列を生成してstateを更新
    setQuizKeyArray(getRandomArray(5));
  };

  return (
    <div className="play-screen">
      <h2>並び替えクイズ</h2>
      <p>リリース年の降順に並び替えなさい｡</p>
      { 
      <CardList
        quizKeyArray={quizKeyArray}
      /> 
      }
      <div className='play-screen-buttons'>
        <button onClick={handleRefresh} className="button-style" >Refresh</button>
        <button onClick={handleAnswer} className="button-style" style={{ width: '50%', height: '50%' }}>回答</button><br />
      </div>
    </div>
  );
}

export default PlayScreen;
