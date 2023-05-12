import React from 'react';
import CardList from './CardList';  // カードリストコンポーネントをインポート


function getRandomArray(n) {
  var array = [];
  while (array.length < n) {
    var randomNumber = Math.floor(Math.random() * (72 - 5 + 1)) + 5;
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
}

function PlayScreen({ onAnswer }) {
  const handleAnswer = () => {
    // ユーザーの回答を採点する処理
    // ここでは仮に常に正解とする
    const isCorrect = true;
    onAnswer(isCorrect);
  };

  const quizKeyArray = getRandomArray(5);

  return (
    <div className="play-screen">
      <h2>並び替えクイズ</h2>
      <p>リリース年の降順に並び替えなさい｡</p>
      { 
      <CardList
        quizKeyArray={quizKeyArray}
      /> 
      }
      <button onClick={handleAnswer}>回答</button>
    </div>
  );
}

export default PlayScreen;
