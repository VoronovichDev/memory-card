import React, { useEffect, useState } from 'react';
import s from './Desk.module.scss';
import Card from '../card/Card';

function Desk(props) {


   const { cards, shuffleCards } = props


   const cardsToDisplay = cards.map((card) =>
      <Card
         url={card.url}
         key={card.id}
         name={card.name}
         shuffleCards={shuffleCards}
      />)

   return (
      <div className={s.desk}>
         {cardsToDisplay}
      </div>

   )
}

export default Desk;
