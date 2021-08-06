export default function Title(props) {
    return props.isParagraph ? (
        <>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </>
    ) : (
        <>
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
        </>
    )
}