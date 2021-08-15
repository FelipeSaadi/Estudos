import Comp3, { Comp1 as Component, Comp2, Comp4, Comp5, Comp6 } from "../../components/module/functional"
export default function importingFunctions() {
    return (
        <div>
            <Component />
            <Comp2 />
            <Comp3 />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Cool" />
        </div>
    )
}