import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, onDelete, onIncrement, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
