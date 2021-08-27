import inIcon from "../../images/arrow-up.svg"
import outIcon from "../../images/arrow-down.svg"
import totalIcon from "../../images/dollar-sign.svg"

import styles from "../../css/financesDisplay.module.css"
export default (props: any) => {
    return (
        <>
            {cardType(props.type)}
        </>
    )
}

let cardType = (type: String) => {
    if (type === "in") {
        return (
            <div className={styles.card}>
                <div className={styles.title}>In</div>
                <div className={styles.icon}>
                    <img src={inIcon} alt="" />
                </div>
            </div>
        )
    } else if (type === "out") {
        return (
            <div className={styles.card}>
                <div className={styles.title}>Out</div>
                <div className={styles.icon}>
                    <img src={outIcon} alt="" />
                </div>
            </div>
        )
    } else if (type === "total") {
        return (
            <div className={styles.card}>
                <div className={styles.title}>Total</div>
                <div className={styles.icon}>
                    <img src={totalIcon} alt="" />
                </div>
            </div>
        )
    }
}