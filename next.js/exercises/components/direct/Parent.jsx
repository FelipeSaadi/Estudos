import Child from "./Child";

export default function Parent(props) {
    return (
        <div>
            {family()}
        </div>
    )

    function family() {
        if (props.family === "Miller") {
            return (
                <>
                    <Child {...props} name="Jack" />
                    <Child {...props} name="Rick" />
                    <Child {...props} name="Sarah" />
                </>
            )
        } else if (props.family === "Stanford") {
            return (
                <>
                    <Child {...props} name="Patrick" />
                    <Child {...props} name="Richard" />
                    <Child {...props} name="Ronnie" />
                </>
            )
        }
    }
}