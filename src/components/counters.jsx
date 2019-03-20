import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterID => {
    console.log("Event Handler Called", counterID);
  };

  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            value={c.value}
            onDelete={this.handleDelete}
            id={c.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
