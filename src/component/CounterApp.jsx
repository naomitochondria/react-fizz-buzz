import React from "react";
import IncreaseButton from "./IncreaseButton";
import CounterDisplay from "./CounterDisplay";
import ResetButton from "./ResetButton";

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        // State harus ada di parent element
        this.state = {
            count: 0,
        };

         // Binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    // Event handler harus didefinisikan di parent element
    // Event handler
    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1,
            };
        });
    }

    // Event handler
    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0,
            };
        });
    }

    render() {
        return (
            <div className="counter-app">
                <IncreaseButton increase={ this.onIncreaseEventHandler } />
                <CounterDisplay count={ this.state.count } />
                <ResetButton reset={ this.onResetEventHandler } />
            </div>
        );
    }
}

export default CounterApp;