import If from "../../components/If";

export default function conditional2() {
    const number = 2
    return (
        <div>
            <If test={number % 2 === 0}>The number {number} is even.</If>
            <If test={number % 2 === 1}>The number {number} is odd.</If>
        </div>
    )
}