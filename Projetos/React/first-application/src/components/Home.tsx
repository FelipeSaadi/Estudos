import styles from "../css/home.module.css"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/TableRow"
export default () => {
    return (
        <div id={styles.home}>
            <div className={styles.container}>
                <TableHeader />
                <TableRow title="Deposit" price={2000.00} category="Others" date="22/06/2021" />
                <TableRow title="Gasoline" price={-40} category="Others" date="26/07/2021" />
                <TableRow title="Paid Out" price={-500} category="Others" date="22/06/2021" />
                <TableRow title="Restaurant" price={-80} category="Food" date="15/08/2021" />
            </div>
        </div>
    )
}