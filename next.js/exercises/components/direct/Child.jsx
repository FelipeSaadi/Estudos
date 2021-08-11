export default function Child(props) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <h2>{props.name}</h2>
            <h3>{props.family}</h3>
        </div>
    )
}