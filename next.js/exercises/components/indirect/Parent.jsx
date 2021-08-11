import Child from "./Child";

export default function Parent(props) {
    function speakWith(params1, params2, params3) {
        console.log(params1, params2, params3)
    }
    return (
        <div>
            <Child function={speakWith} />
        </div>
    )
}