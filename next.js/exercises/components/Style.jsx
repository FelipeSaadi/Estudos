import styles from "../styles/styles.module.css"
export default function Style(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.number >= 0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.right ? "right" : "left"
            }}>
                Text #01
            </h1>
            <h2 className={props.number >= 0 ? "blue" : "red"}>
                Text #02
            </h2>
            <h3 className={props.number >= 0 ? [styles.big, "blue", "right"].join(" ") : [styles.small, "red"].join(" ")}>
                Text #03
            </h3>
        </div >
    )
}