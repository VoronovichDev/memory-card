import React from 'react';
import s from './Header.module.scss';
import Scoreboard from './scoreboard/Scoreboard';

function Header(props) {
   return (
      <div className={s.header}>
         <h1>Memory game</h1>
         <Scoreboard />
      </div>
   );
}

export default Header;
