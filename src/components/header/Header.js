import React from 'react';
import s from './Header.module.scss';
import Scoreboard from './scoreboard/Scoreboard';

function Header(props) {

   const { currentScore, bestResult } = props

   return (
      <div className={s.header}>
         <h1>Memory game</h1>
         <Scoreboard
            currentScore={currentScore}
            bestResult={bestResult} />
      </div>
   );
}

export default Header;
