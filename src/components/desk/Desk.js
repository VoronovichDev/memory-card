import React, { useEffect, useState } from 'react';
import s from './Desk.module.scss';
import Card from '../card/Card';

function Desk(props) {


   const { shuffleCards, cards } = props


   return (
      <div className={s.desk}>
         {cards.map((card) => (
            <Card
               card={card}
               key={card.id}
               shuffleCards={shuffleCards}
            />
         ))}
      </div>
   );

   // const cardsToDisplay = cards.map((card) =>
   //    <Card
   //       url={card.url}
   //       key={card.id}
   //       name={card.name}
   //       shuffleCards={shuffleCards}
   //    />)

   // return (
   //    <div className={s.desk}>
   //       {cardsToDisplay}
   //    </div>

   // )
}

export default Desk;
