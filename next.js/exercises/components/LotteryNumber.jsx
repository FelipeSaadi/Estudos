export default function LotteryNumber(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "40px",
            borderRadius: "20px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "14px",
            margin: "2px"
        }}>
            {props.number}
        </div>
    )
}