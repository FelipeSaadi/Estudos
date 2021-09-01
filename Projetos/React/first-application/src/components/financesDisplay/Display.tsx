import styles from "../../css/financesDisplay.module.css"
import Card from "./Card"
export default () => {
    return (
        <div className={styles.display}>
            <div className={styles.container}>
                <Card type="in" value={2000} />
                <Card type="out" value={800.0} />
                <Card type="total" value={1200} />
            </div>
        </div>
    )
}