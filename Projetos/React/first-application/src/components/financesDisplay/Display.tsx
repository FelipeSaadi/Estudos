import styles from "../../css/financesDisplay.module.css"
import Card from "./Card"
export default () => {
    return (
        <div className={styles.display}>
            <div className={styles.container}>
                <Card type="in" />
                <Card type="out" />
                <Card type="total" />
            </div>
        </div>
    )
}