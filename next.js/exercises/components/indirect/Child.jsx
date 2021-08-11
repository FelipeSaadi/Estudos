export default function Child(props) {
    return (
        <div>
            <h1>Child</h1>
            <button onClick={props.function}>Speak With #01</button>
            <button onClick={
                () => props.function("I approved!", "I will do Medicine!", `Starting in ${2022}`)
            }>
                Speak With #02
            </button>
        </div>
    )
}