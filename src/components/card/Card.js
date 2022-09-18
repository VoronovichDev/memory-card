import React from 'react';
import s from './Card.module.scss';

function Card(props) {

   const { card, shuffleCards } = props


   return (
      <div className={s.card} onClick={() => shuffleCards(card.id)}>
         <img src={card.url} alt={card.name} />
         <p>{card.name}</p>
      </div>
   );
}

export default Card;
