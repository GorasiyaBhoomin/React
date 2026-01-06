import React, { Component } from "react";

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            counter: 10,
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrementCount = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    };

    render() {
        return (
            <div>
                <h2>Class State Example</h2>
                <p>Count: {this.state.count}</p>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
                <button onClick={this.decrementCount}>Decrement Counter</button>
            </div>
        );
    }
}

export default ClassState;