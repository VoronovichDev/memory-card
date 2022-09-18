import React from 'react';
import s from './Card.module.scss';

function Card(props) {

   let { url, id, name, shuffleCards } = props


   return (
      <div className={s.card} key={id} onClick={shuffleCards}>
         <img src={url} alt={name} />
         <p>{name}</p>
      </div>
   );
}

export default Card;
