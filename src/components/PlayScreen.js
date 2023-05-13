import React, { useState, useEffect } from 'react';
import CardList from './CardList';  // カードリストコンポーネントをインポート
import { getLanguageInfo } from '../data/data';
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
const generateCards = (Array) => {
  const quizes = getLanguageInfo(Array);
  const years = quizes.map((quiz) => parseInt(quiz[0]));
  const descriptions = quizes.map((quiz) => quiz[1]);
  const titles = quizes.map((quiz) => quiz[2]);
  const extensions = quizes.map((quiz) => quiz[3]);
  
  // 年とインデックスをペアにして降順に並べ替え
  const sortedIndexes = years.map((year, index) => ({year, index})).sort((a, b) => b.year - a.year);

  // 並べ替えた後のインデックスを取得
  const correctOrder = sortedIndexes.map(item => item.index);

  const cards = [];
  for (let i = 0; i < quizes.length; i++) {
    cards.push({
      id: years[i], 
      front: titles[i],
      back: {title: titles[i], description: descriptions[i]},
      corner: extensions[i],
      order: correctOrder.indexOf(i),  // カードの正解の順序を追加
    })
  }
  return cards;
}

function kendallsTau(arr1, arr2) {
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);

  let concordant = 0;
  let discordant = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i+1; j < arr2.length; j++) {
      let arr1_i = arr1[i], arr1_j = arr1[j];
      let arr2_i = arr2.findIndex(val => val === arr1_i);
      let arr2_j = arr2.findIndex(val => val === arr1_j);
      if ((arr2_i - arr2_j) * (i - j) > 0) {
        concordant += 1;
      } else if ((arr2_i - arr2_j) * (i - j) < 0) {
        discordant += 1;
      }
    }
  }
  console.log('concordant:', concordant);
  console.log('discordant:', discordant);

  const tau = Number(((concordant - discordant) / (concordant + discordant)).toFixed(4));

  return tau; 
}


function PlayScreen({ player, onEnd }) {
  const [quizKeyArray, setQuizKeyArray] = useState(getRandomArray(5));
  const [cards, setCards] = useState(generateCards(quizKeyArray));

  // quizKeyArrayが変更されたときに新しいカード列を生成
  useEffect(() => {
    setCards(generateCards(quizKeyArray));
  }, [quizKeyArray]);

  const moveCard = (fromIndex, toIndex) => {
    const newCards = [...cards]
    const cardToMove = newCards[fromIndex]
    newCards.splice(fromIndex, 1)
    newCards.splice(toIndex, 0, cardToMove)
    setCards(newCards)
  }

  const handleAnswer = () => {
    // ユーザーのカードの順序と正解の順序を取得
    const userOrder = cards.map(card => card.id);
    
    // キーからリリース年を取得して降順にソート
    const correctOrder = getLanguageInfo(quizKeyArray).map(info => parseInt(info[0])).sort((a, b) => b - a);
  
    // ケンドールの相関係数を計算
    const tau = kendallsTau(userOrder, correctOrder).toFixed(4);
  
    console.log(tau);
    onEnd(tau);
  };
  

  const handleRefresh = () => {
    // Refreshボタンが押されたときに新しい乱数配列を生成してstateを更新
    setQuizKeyArray(getRandomArray(5));
  };

  return (
    <div className="m-4 flex flex-col items-center">
      <h2 className="text-4xl mb-4">並び替えクイズ</h2>
      <p className="my-4 bold text-xl">リリース年の降順に並び替えなさい｡</p>
      <div className="p-2 border rounded-xl">
        <CardList cards={cards} moveCard={moveCard} />
      </div>
      <div className='play-screen-buttons'>
        <button onClick={handleRefresh} className="button-style" >Refresh</button>
        <button onClick={handleAnswer} className="button-style" style={{ width: '50%', height: '50%' }}>回答</button><br />
      </div>
    </div>
  );
}

export default PlayScreen;
