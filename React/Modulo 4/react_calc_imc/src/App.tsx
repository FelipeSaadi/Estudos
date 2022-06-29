import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'
import poweredImage from './assets/powered.png';

function App() {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>...</div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
}

export default App;
