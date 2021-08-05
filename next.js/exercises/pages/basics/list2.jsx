export default function list2() {
    return (
        <div>
            <div>{generateList(10)}</div>
            <div>{generateList(5)}</div>
        </div>

    )
}

const generateList = function (final = 10) {
    const list = []

    for (let i = 1; i <= final; i++) {
        if (i < final) {
            list.push(<span>{i}, </span>)
        } else {
            list.push(<span>{i}</span>)
        }
    }
    return list
}