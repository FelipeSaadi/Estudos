import { Modal, Button } from "antd"
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css'
import styles from "../css/home.module.css"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/TableRow"
export default () => {
    const create = (teste: any,) => {
        return [...teste, (
            <TableRow title={title} price={value} category={category} date={date} />)]
    }
    const clearInputs = () => {
        setTitle('')
        setValue('')
        setCategory('')
        setDate('')
    }
    // Inputs
    const [title, setTitle] = useState<any>()
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
        if (title && value && category && date) {
            setTable(create(table))
            setIsModalVisible(false);
            clearInputs()
        }
    }

    const handleCancel = () => {
        clearInputs()
        setIsModalVisible(false);
    }

    return (
        <div id={styles.home}>
            <div className={styles.container}>
                <div className={styles.displayButton}>
                    <button onClick={showModal} className={styles.addNewButton}>New Entry</button>
                    <Modal title="New Entry" centered visible={isModalVisible} okType="default" onOk={handleOk} onCancel={handleCancel}>
                        <form id="form" action="">
                            <label className={styles.modalLabel} htmlFor="title">Title</label>
                            <input value={title} onChange={(ev) => setTitle(ev.target.value)} id="title" className={styles.modalInput} type="text" required />
                            <label className={styles.modalLabel} htmlFor="value">Value</label>
                            <input value={value} onChange={(ev) => setValue(ev.target.value)} id="value" className={styles.modalInput} type="number" required />
                            <label className={styles.modalLabel} htmlFor="category">Category</label>
                            <input value={category} onChange={(ev) => setCategory(ev.target.value)} id="category" className={styles.modalInput} type="text" required />
                            <label className={styles.modalLabel} htmlFor="date">Date</label>
                            <input value={date} onChange={(ev) => setDate(ev.target.value)} id="date" className={styles.modalInput} type="date" required />
                        </form>

                    </Modal>
                </div>
                <TableHeader />
                <div className={styles.table}>
                    {table}
                </div>
            </div>
        </div>
    )
}