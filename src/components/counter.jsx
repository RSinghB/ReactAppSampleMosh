import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   //tags: ["tag1", "tag2"]
  // };

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

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    //console.log("Props", this.props);
    console.log("Counter - Rendered");
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.randerTag()} */}

        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
