interface PersonProps {
    name: String
    age?: number
}

export default function Person(props: PersonProps) {
    return (
        <div>
            <div>Name: {props.name}</div>
            <div>Age: {props.age ?? "Not Informed"}</div>
        </div>
    )
}