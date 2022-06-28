import styles from './styles.module.css'

const Button = () => {
    return (
        <div className={styles.square}>
            <button className={styles.button}>Botão</button>
            <p className={styles.legend}>Legenda</p>
        </div>
    )
}

export default Button