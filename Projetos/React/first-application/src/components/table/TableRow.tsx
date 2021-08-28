import styles from "../../css/home.module.css"
export default (props: any) => {
    return (
        <>
            <div className={styles.tableRow}>
                <div className={styles.rowText}>{props.title}</div>
                <div className={props.price > 0 ? styles.entry : styles.out}>{props.price < 0 ? "-" : null} $ {Math.abs(props.price)}</div>
                <div className={styles.rowText}>{props.category}</div>
                <div className={styles.rowText}>{props.date}</div>
            </div>
        </>
    )
}