import React from 'react';

function ResultScreen({ player, onRestart }) {
  const handleRestart = () => {
    onRestart();
  };

  return (
    <div className="result-screen">
      <h2>結果</h2>
      <p>{player.name}さんのスコアは{player.score}点です。</p>
      <button onClick={handleRestart}>もう一度プレイ</button>
    </div>
  );
}

export default ResultScreen;
