import { Component } from "react";

export default class Count extends Component {

    state = {
        number: this.props.value ?? 0,
        steps: this.props.steps ?? 1
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.steps
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.steps
        })
    }

    changeSteps = (ev) => {
        this.setState({ steps: +ev.target.value })
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={1000}
                    value={this.state.steps}
                    onChange={this.changeSteps} />
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Count (Using Class)</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        )
    }
}