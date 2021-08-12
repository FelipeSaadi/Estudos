import { useState } from "react"

export default function mouse() {

    // Simplified
    const [x, setX] = useState(0)

    // Not Simplified
    const arrayY = useState(0)
    let y = arrayY[0]
    const setY = arrayY[1]

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function mouseMove(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }
    return (
        <div style={style} onMouseMove={mouseMove}>
            <span>Axis X: {x}</span>
            <span>Axis Y: {y}</span>
        </div>
    )
}