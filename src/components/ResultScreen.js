import React from "react";

function ResultScreen({ player, onReset }) {
  const handleRestart = () => {
    onReset();
  };
  

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="w-fit text-4xl mb-6">結果</h2>
      <p className="w-fit">
        {player.name}さんのスコアは{" "}
        <span className="text-lg bold">
          {Math.round(player.score)}
        </span>{" "}
        点です。
      </p>
      <button
        className="w-fit p-6 mt-12 border rounded-lg"
        onClick={handleRestart}
      >
        もう一度プレイ
      </button>
    </div>
  );
}

export default ResultScreen;
