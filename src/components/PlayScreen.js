import React from 'react';
import CardList from './CardList';  // カードリストコンポーネントをインポート

function PlayScreen({ quiz, onAnswer }) {
  const handleAnswer = () => {
    // ユーザーの回答を採点する処理
    // ここでは仮に常に正解とする
    const isCorrect = true;
    onAnswer(isCorrect);
  };

  return (
    <div className="play-screen">
      <h2>クイズ</h2>
      <p>{quiz.question}</p>
      { 
      <CardList
        cards={quiz.cards}
      /> 
      }
      <button onClick={handleAnswer}>回答</button>
    </div>
  );
}

export default PlayScreen;
