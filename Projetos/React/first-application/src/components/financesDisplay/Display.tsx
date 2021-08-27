import styles from "../../css/financesDisplay.module.css"
import Card from "./Card"
export default () => {
    return (
        <div className={styles.display}>
            <div className={styles.container}>
                <Card type="in" value="2.000.00" />
                <Card type="out" value="800.00" />
                <Card type="total" value="1.200.00" />
            </div>
        </div>
    )
}