import LotteryNumber from "./LotteryNumber"

export default function LotteryDraw(props) {
    function generateDraw(draws) {
        const generatedDraw = []
        const lotteryNumbers = []

        for (let i = 0; i < draws; i++) {
            let number = parseInt(Math.random() * 60) + 1
            while (lotteryNumbers.includes(number)) {
                number = parseInt(Math.random() * 60) + 1
            }
            lotteryNumbers.push(number)
        }
        lotteryNumbers.sort((n1, n2) => n1 - n2)

        for (let i = 0; i < draws; i++) {
            generatedDraw.push(<LotteryNumber key={i} number={lotteryNumbers[i]} />)
        }
        return generatedDraw
    }
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "50vw",
            justifyContent: "left",
            alignItems: "center"
        }}>
            {generateDraw(props.value)}
        </div >
    )
}