export default function Sum(props) {
    // props.value++
    return (
        <div>
            <h1>{props.value + 1}</h1>
            <h2>{props.value}</h2>
            <h3>{props.value - 1}</h3>
        </div>
    )
}