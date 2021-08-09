import styles from "../styles/line.module.css"
import Subdivision from "./Subdivision";

export default function Line(props) {
    return (
        <div className={styles.line}>
            {props.inverse ? (
                <>
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                    <Subdivision black />
                    <Subdivision />
                </>) : (
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
            )}
        </div >
    )
}