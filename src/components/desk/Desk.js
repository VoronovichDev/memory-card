import React, { useState } from 'react';
import s from './Desk.module.scss';
import Card from '../card/Card';
import arc from '../../img/Arc.png'
import wr from '../../img/Windranger.png'
import axe from '../../img/Axe.png'
import viper from '../../img/Viper.png'
import cent from '../../img/Centaur.png'
import phoenix from '../../img/Phoenix.png'
import dk from '../../img/DK.png'
import morph from '../../img/Morphling.png'



function Desk(props) {

   const [cards, setCards] = useState(cardsData)

   const cardsToDisplay = cards.map((card) =>
      <Card
         url={card.url}
         key={card.id}
         name={card.name} />)

   return (
      <div className={s.desk}>
         {cardsToDisplay}
      </div>

   )
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

export default Desk;
