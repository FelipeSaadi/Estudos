export default function List(props) {
    return (
        <div>
            <h2>List of Something</h2>
            <ul style={
                {
                    listStyle: "none",
                    padding: 0
                }
            }>
                {props.children}
            </ul>
        </div>

    )
}