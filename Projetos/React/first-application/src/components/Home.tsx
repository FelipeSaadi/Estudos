import { Modal, Button } from "antd"
import React, { useState } from 'react';
import 'antd/dist/antd.css'
import styles from "../css/home.module.css"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/TableRow"
export default () => {
    // Table
    const [table, setTable] = useState([])

    // ModaL
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {

        setIsModalVisible(true);
    }

    const handleOk = () => {
        /*setTable((table) => {
            [...table, "teste"]
        })*/
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <div id={styles.home}>
            <div className={styles.container}>
                <div className={styles.displayButton}>
                    <button onClick={showModal} className={styles.addNewButton}>New Entry</button>
                    <Modal title="New Entry" centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <label className={styles.modalLabel} htmlFor="title">Title</label>
                        <input className={styles.modalInput} type="text" />
                        <label className={styles.modalLabel} htmlFor="value">Value</label>
                        <input className={styles.modalInput} type="number" />
                        <label className={styles.modalLabel} htmlFor="category">Category</label>
                        <input className={styles.modalInput} type="text" />
                        <label className={styles.modalLabel} htmlFor="date">Date</label>
                        <input className={styles.modalInput} type="date" />
                    </Modal>
                </div>
                <TableHeader />
                <div className={styles.table}>
                    <TableRow title="Deposit" price={2000.00} category="Others" date="22/06/2021" />
                    <TableRow title="Gasoline" price={-40} category="Others" date="26/07/2021" />
                    <TableRow title="Paid Out" price={-500} category="Others" date="22/06/2021" />
                    <TableRow title="Restaurant" price={-80} category="Food" date="15/08/2021" />
                    <TableRow title="Restaurant" price={-480} category="Food" date="15/08/2021" />
                    <TableRow title="Restaurant" price={980} category="Food" date="15/08/2021" />
                </div>
            </div>
        </div>
    )
}