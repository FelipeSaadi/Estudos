import styles from "../css/header.module.css"
import FinancesDisplay from "./financesDisplay/Display"

export default () => {
    return (
        <>
            <div id={styles.header}>
                <div className={styles.logo}>Logo</div>
                <button className={styles.addNewButton}>Nova entrada</button>
            </div>
        </>
    )
}