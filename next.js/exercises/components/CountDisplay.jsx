export default function CountDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50px",
            backgroundColor: "#222",
            color: "fff",
            fontSize: "2rem",
            margin: "20px"

        }}>
            {props.value}
        </div>
    )
}