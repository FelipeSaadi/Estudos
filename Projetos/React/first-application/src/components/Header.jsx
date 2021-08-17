import styles from "../css/header.module.css"

export default () => {
    return (
        <div id={styles.header}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.addNewButton}>Nova Senha</div>
        </div>
    )
}