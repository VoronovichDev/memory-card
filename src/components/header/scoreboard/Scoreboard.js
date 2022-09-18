import React from 'react';
import s from './Scoreboard.module.scss';

function Scoreboard(props) {


   const { currentScore, bestResult } = props


   return (
      <div className={s.scoreboard}>
         <p>Current score: {currentScore}</p>
         <p>Best result: {bestResult}</p>
      </div>
   );
}

export default Scoreboard;
