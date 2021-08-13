import { useState } from "react"
import LotteryDraw from "../../components/LotteryDraw"

export default function lotteryDraw() {
    const [value, setValue] = useState(0)
    const [draw, setDraw] = useState("")

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <span>
                {draw}
            </span>
            <input style={{ margin: "10px" }} type="number" min={6} max={16} onChange={e => setValue(e.target.value)} />
            <button onClick={() => setDraw(<LotteryDraw value={value} />)}>Generate Draw</button>

        </div >
    )
}