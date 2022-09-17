import React from 'react';
import s from './Scoreboard.module.scss';

function Scoreboard(props) {
   return (
      <div className={s.scoreboard}>
         <p>Current score:</p>
         <p>Best result:</p>
      </div>
   );
}

export default Scoreboard;
