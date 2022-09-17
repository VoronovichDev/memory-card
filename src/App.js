import React from 'react';
import s from './App.module.scss';
import Desk from './components/desk/Desk';
import Header from './components/header/Header';

function App() {
   return (
      <div className={s.app}>
         <Header />
         <Desk />
      </div>
   );
}



export default App;
