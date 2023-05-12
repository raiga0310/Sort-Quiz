import React, { useState } from 'react';
import '../App.css';
import './StartScreen.css';

function StartScreen({ onStart }) {
  const [name, setName] = useState("");

  const handleStart = (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ
    if (name) {
      onStart(name);
    } else {
      alert('名前を入力してください');
    }
  };

  return (
    <div className="start-screen">
      <h2>Sort Quiz</h2>
      <form onSubmit={handleStart}>  {/* formタグを追加 */}
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="button-style"
        />
        <button type="submit" className="button-style">開始</button> {/* type="submit"を追加 */}
      </form>
      <div class="quote-container">
        <p class="quote-content">wwww<br />.then().then().then().then()</p>
        <p class="quote-author">- かわえおじさん(35)</p>
      </div>

    </div>
  );
}

export default StartScreen;
