import LotteryNumber from "./LotteryNumber"

export default function LotteryDraw(props) {
    function generateDraw(draws) {
        const lotteryNumbers = []
        for (let i = 0; i <= draws; i++) {
            lotteryNumbers.push(<LotteryNumber number={Math.floor(Math.random(1) * 61)} />)
        }
        return lotteryNumbers
    }
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            alignItems: "center"
        }}>
            {generateDraw(props.value)}
        </div>
    )
}