import { useState } from "react"
import LotteryDraw from "../../components/LotteryDraw"

export default function lotteryDraw() {
    const [value, setValue] = useState(6)
    const [draw, setDraw] = useState("")

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1 style={{ margin: "10px" }}>Lottery Draw</h1>
            <span>
                {draw}
            </span>
            <input style={{ margin: "15px", textAlign: "center" }} type="number" min={6} max={16} value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => value >= 6 ? setDraw(<LotteryDraw value={value} />) : null}>Generate Draw</button>

        </div >
    )
}