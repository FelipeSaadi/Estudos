export default function OnlyEven(props) {
    const numberEven = props.number % 2 === 0
    return (
        <div>
            {numberEven ?
                <span>{props.number}</span> :
                null
            }
        </div>
    )

}