import { Modal } from "antd"
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css'
import FinancesDisplay from "./financesDisplay/Display"
import styles from "../css/home.module.css"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/TableRow"
export default () => {
    const updateDisplay = () => {
        return <FinancesDisplay entry={entry} out={out} total={total} />
    }
    const create = (teste: any,) => {
        return [...teste, (
            <TableRow title={title} price={entryType == "in" ? value : -value} category={category} date={date} />)]
    }
    const clearInputs = () => {
        setTitle('')
        setEntryType('')
        setValue('')
        setCategory('')
        setDate('')
    }
    // Display
    const [entry, setEntry] = useState<number>(0)
    const [out, setOut] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const [display, setDisplay] = useState<any>(
        <FinancesDisplay entry={entry} out={out} total={total} />
    )

    useEffect(() => {
        setDisplay(updateDisplay())
    }, [entry, out, total])

    // Inputs
    const [title, setTitle] = useState<any>()
    const [entryType, setEntryType] = useState<any>()
    const [value, setValue] = useState<any>()
    const [category, setCategory] = useState<any>()
    const [date, setDate] = useState<any>()

    // Table
    const [table, setTable] = useState<Array<any>>([])

    // ModaL
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        clearInputs()
        setIsModalVisible(true);
    }

    const handleOk = () => {
        if (title && value && category && date && entryType) {
            if (entryType === 'in') {
                setEntry(entry + Number(value))
                setTotal(total + Number(value))
            } else if (entryType === 'out') {
                setOut(out + Number(value))
                setTotal(total - Number(value))
            }
            setTable(create(table))
            setIsModalVisible(false);
        }
    }

    const handleCancel = () => {
        clearInputs()
        setIsModalVisible(false);
    }

    return (
        <>
            {display}
            <div
                id={styles.home}>
                <div
                    className={styles.container}>
                    <div
                        className={styles.displayButton}>
                        <button
                            onClick={showModal}
                            className={styles.addNewButton}>New Entry
                        </button>
                        <Modal centered
                            title="New Entry"
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <form
                                id="form"
                                action=""
                            >
                                <label
                                    className={styles.modalLabel}
                                    htmlFor="title">
                                    Title
                                </label>
                                <input required
                                    value={title}
                                    onChange={(ev) => setTitle(ev.target.value)}
                                    id="title"
                                    className={styles.modalInput}
                                    type="text"
                                />

                                <label
                                    className={styles.modalLabel}
                                    htmlFor="type">
                                    Entry type
                                </label>
                                <select
                                    value={entryType}
                                    className={styles.modalInput}
                                    onChange={(ev) => setEntryType(ev.target.value)}
                                    name="entryType"
                                    id="entry-type"
                                >
                                    <option hidden selected
                                        value=""  >
                                    </option>

                                    <option
                                        className={styles.modalInput}
                                        value="in">
                                        In
                                    </option>

                                    <option
                                        className={styles.modalInput}
                                        value="out">
                                        Out
                                    </option>
                                </select>

                                <label
                                    className={styles.modalLabel} htmlFor="value">
                                    Value
                                </label>
                                <input required
                                    value={value}
                                    onChange={(ev) => setValue(ev.target.value)}
                                    id="value"
                                    className={styles.modalInput}
                                    type="number"
                                />

                                <label
                                    className={styles.modalLabel}
                                    htmlFor="category">Category
                                </label>
                                <select
                                    value={category} className={styles.modalInput}
                                    onChange={ev => setCategory(ev.target.value)}
                                    name="category"
                                    id=""
                                >
                                    <option hidden selected
                                        value="">
                                    </option>

                                    <option
                                        value="Payment">
                                        Payment
                                    </option>

                                    <option
                                        value="Food">
                                        Food
                                    </option>

                                    <option
                                        value="Transport">
                                        Transport
                                    </option>

                                    <option
                                        value="Other">
                                        Other
                                    </option>
                                </select>

                                <label
                                    className={styles.modalLabel}
                                    htmlFor="date">
                                    Date
                                </label>
                                <input required
                                    value={date}
                                    onChange={(ev) => setDate(ev.target.value)}
                                    id="date"
                                    className={styles.modalInput}
                                    type="date" />
                            </form>
                        </Modal>
                    </div>
                    <TableHeader />
                    <div
                        className={styles.table}>
                        {table}
                    </div>
                </div>
            </div >
        </>
    )
}