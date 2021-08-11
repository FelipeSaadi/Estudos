function action1() {
    console.log("Action #01")
}

export default function button() {
    function action2() {
        console.log("Action #02")
    }

    function action5(e) {
        console.log(e)
    }
    return (
        <div>
            <button onClick={action1}>Action #01</button>
            <button onClick={action2}>Action #02</button>
            <button onClick={function action3() {
                console.log("Action #03")
            }}>Action #03</button>
            <button onClick={() => console.log("Action #04")}>
                Action #04
            </button>
            <button onClick={action5}>Action #05</button>
            <button onClick={e => action5(e.altKey)}>Action #05 v2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div >
    )
}