export default function loop1() {
    const listAproved = [
        'John',
        'Nick',
        'Raphael',
        'Monique',
        'Sarah',
        'Paloma',
        'Robert',
        'Nadija'
    ]
    function renderList() {
        return listAproved.map((name, i) => <li key={i}>{name}</li>)
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

/*function renderList() {
    const items = []

    for (let i = 0; i < listAproved.length; i++) {
        items.push(<li key={i}>{listAproved[i]}</li>)
    }
    return items
}*/