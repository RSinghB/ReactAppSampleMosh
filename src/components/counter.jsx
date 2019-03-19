import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //tags: ["tag1", "tag2"]
  };

  /*randerTag() {
    if (this.state.tags.length === 0) return "There is not tag!";

    return (
      <ul>
        {this.state.tags.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  }*/

  render() {
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.randerTag()} */}

        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement() {
    console.log("Incremnet Clicked");
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
