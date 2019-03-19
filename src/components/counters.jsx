import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    Counters: [
      { Id: 1, value: 0 },
      { Id: 2, value: 2 },
      { Id: 3, value: 2 },
      { Id: 4, value: 3 },
      { Id: 5, value: 4 },
      { Id: 6, value: 5 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.Counters.map(c => (
          <Counter key={c.Id} />
        ))}
      </div>
    );
  }
}

export default Counters;
