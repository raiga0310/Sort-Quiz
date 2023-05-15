import React from "react";
import "./LeaderBoard.css"

function LeaderBoard({ players, currentPlayer }) {

  return (
    <div className="m-4 flex flex-col items-center">
      <h2 className="text-4xl mb-4">Leader Board</h2>
      <div className="p-2 border rounded-xl overflow-auto h-64">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">名前</th>
              <th className="px-4 py-2">スコア</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className={`hover:bg-gray-700 ${player.name === currentPlayer ? 'bg-blue-500' : ''}`}>
                <td className="px-4 py-2">{player.name}</td>
                <td className="px-4 py-2">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
