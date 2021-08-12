import { useState } from "react"

export default function count() {
    const style = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#444",
        color: "#fff",
        height: "100vh"
    }
    const buttonStyle = {
        width: "30px",
        height: "30px"
    }
    const [value, setValue] = useState(0)

    function add() {
        setValue(value + 1)
    }
    function decrease() {
        setValue(value - 1)
    }
    return (
        <div style={style}>
            <h1>Count</h1>
            <div>Value: {value}</div>
            <div>
                <button onClick={add} style={buttonStyle}>+</button>
                <button onClick={decrease} style={buttonStyle}>-</button>
            </div>
        </div>
    )
}