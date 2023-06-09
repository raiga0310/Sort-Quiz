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

async function fetchRADWIMPSCode(extension) {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/approvers/RADWIMPS/master/RADWIMPS.${extension}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Fetch Error :-S', error);
    return 'Fetch Error';
  }
}

async function generateCards(Array) {
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
    const code = await fetchRADWIMPSCode(extensions[i]);
    console.log(code);
    cards.push({
      id: years[i], 
      front: code,
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
    for (let j = i + 1; j < arr1.length; j++) {
      let arr1_i = arr1[i],
        arr1_j = arr1[j];
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

function scoreFunction(x) {
  return 5000 / (1 + Math.exp(-10 * x));
}


function PlayScreen({ player, onEnd }) {
  const [quizKeyArray, setQuizKeyArray] = useState(getRandomArray(5));
  const [cards, setCards] = useState(generateCards(quizKeyArray));

  // quizKeyArrayが変更されたときに新しいカード列を生成
  useEffect(() => {
    const fetchData = async () => {
      const newCards = await generateCards(quizKeyArray);
      setCards(newCards);
    };
    fetchData();
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
    onEnd(scoreFunction(tau));
  };
  

  const handleRefresh = () => {
    // Refreshボタンが押されたときに新しい乱数配列を生成してstateを更新
    setQuizKeyArray(getRandomArray(5));
  };

  const [srcs, setSrcs] = React.useState([]);

  return (
    <div className="m-4 flex flex-col items-center">
      <h2 className="text-4xl mb-4">並び替えクイズ</h2>
      <p className="my-4 bold text-xl">リリース年の降順に並び替えなさい｡</p>
      <div className="p-2 border rounded-xl">
        <CardList cardsPromise={cards} moveCard={moveCard} setSrcs={setSrcs} />
      </div>
      <div className="play-screen-buttons">
        <button onClick={handleRefresh} className="button-style">
          Refresh
        </button>
        <button
          onClick={handleAnswer}
          className="button-style"
          style={{ width: "50%", height: "50%" }}
        >
          回答
        </button>
        <br />
      </div>
      <div className="mt-8 grid grid-row-2 gap-4">
        {srcs.map((src) => (
          <pre className="bg-slate-300 text-slate-900">
            <code>{src}</code>
          </pre>
        ))}
      </div>
    </div>
  );
}

export default PlayScreen;
