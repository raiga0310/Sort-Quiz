import React, { useState } from 'react';

function StartScreen({ onStart }) {
  const [name, setName] = useState(""); // ユーザー名をローカルstateとして管理

  const handleStart = () => {
    // 名前が空でない場合に限り、クイズを開始
    if (name) {
      onStart(name);
    } else {
      alert('名前を入力してください');
    }
  };

  return (
    <div className="start-screen">
      <h2>Sort Quiz</h2>
      <p>ほげ</p>
      <input
        type="text"
        placeholder="名前を入力してください"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleStart}>開始</button>
    </div>
  );
}

export default StartScreen;
