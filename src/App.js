import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Component Mounted");
  }

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = counter => {
    const count = [...this.state.counters];
    const index = count.indexOf(counter);
    count[index] = { ...counter };
    count[index].value++;
    this.setState({ counters: count });
    //console.log(this.state.counters[0]);
  };

  render() {
    console.log("App - Rendred");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
