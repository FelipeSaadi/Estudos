import { useState } from 'react';
import styles from './App.module.css'
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem'

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightFeild] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      setToShow(null)
      alert("Digite todos os campos.")
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0);
    setWeightFeild(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.2 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightFeild(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item}></GridItem>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightResult}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="Seta para a esquerda" width={25}/>
              </div>
              <GridItem data={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
