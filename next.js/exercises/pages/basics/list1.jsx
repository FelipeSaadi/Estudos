export default function list1() {
    return (
        <div>
            {generateList()}
        </div>
    )
}

const generateList = function () {
    const list = []
    for (let i = 1; i <= 10; i++) {
        if (i === 10) {
            list.push(<span>{i}</span>)
        }
        else {
            list.push(<span>{i}, </span>)
        }
    }
    return list
}