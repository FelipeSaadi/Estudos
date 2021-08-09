import styles from "../styles/line.module.css"
import Subdivision from "./Subdivision";

export default function Line(props) {
    return (
        <div className={styles.line}>
            {props.line % 2 === 0 ? (
                <>
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                </>
            ) : (
                <>
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                </>
            )}
        </div >
    )
}