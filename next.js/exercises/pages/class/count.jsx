import { Component } from "react"
import Count from "../../components/Count"
export default class CountPage extends Component {
    render() {
        return (
            <>
                <Count value={100} steps={25} />
            </>
        )
    }
}