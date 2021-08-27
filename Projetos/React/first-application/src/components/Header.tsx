import styles from "../css/header.module.css"

export default () => {
    return (
        <>
            <div id={styles.header}>
                <div className={styles.logo}>Logo</div>
                <button className={styles.addNewButton}>New Entry</button>
            </div>
        </>
    )
}