import { useEffect, useState } from "react"
import { generateNumbers } from "../../functions/generateNumbers"
import LotteryDraw2 from "../../components/LotteryDraw2"

export default function lotteryDraw2() {
    const [draw, setDraw] = useState(6)
    const [numbers, setNumbers] = useState([])
    useEffect(() => {
        setNumbers(generateNumbers(draw))
    }, [])
    function renderDraw() {
        return numbers.map(
            number => <LotteryDraw2 key={number} number={number} />
        )
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Lottery Draw</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {renderDraw()}
            </div>
            <div>
                <input type="number" min={6} max={16} value={draw} onChange={(ev) => setDraw(ev.target.value)} />
                <button onClick={() => setNumbers(generateNumbers(draw))}>Generate Draws</button>
            </div>
        </div>
    )
}