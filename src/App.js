import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import Desk from './components/desk/Desk';
import Header from './components/header/Header';
import arc from './img/Arc.png'
import wr from './img/Windranger.png'
import axe from './img/Axe.png'
import viper from './img/Viper.png'
import cent from './img/Centaur.png'
import phoenix from './img/Phoenix.png'
import dk from './img/DK.png'
import morph from './img/Morphling.png'


function App() {

   const [cards, setCards] = useState(cardsData)
   const [currentScore, setCurrentScore] = useState(0)
   const [bestResult, setBestResult] = useState(0)


   function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array
   }

   const shuffleCards = () => {
      setCards(shuffle(cards))
   }

   return (
      <div className={s.app}>
         <Header
            currentScore={currentScore}
            bestResult={bestResult} />
         <Desk
            cards={cards}
            shuffleCards={shuffleCards} />
      </div>
   );
}

const cardsData = [
   { name: "Arc Warden", url: arc, id: 1 },
   { name: "Windranger", url: wr, id: 2 },
   { name: "Axe", url: axe, id: 3 },
   { name: "Viper", url: viper, id: 4 },
   { name: "Centaur Warrunner", url: cent, id: 5 },
   { name: "Phoenix", url: phoenix, id: 6 },
   { name: "Dragon Knight", url: dk, id: 7 },
   { name: "Morphling", url: morph, id: 8 },
]

export default App;
