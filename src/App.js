import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    // the given value in this state is private only for this component
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor(props) {
    //note we cannot use a prop inside a constructor unless we set it inside a contructor as a parameter
    //also we need to add a props property inside a super to access the parents properties
    super(props);
    console.log(
      `App-Constructor` /* ,
      this.props */
    ); /* 
    this.state = this.props.something; */
    /* this.setState() */
    //this method can only be used once a component has been rendered and place in a DOM
  }

  //this method will be called after the component is rendered into the DOM
  //perfect place to use AJAX call to get data from the server
  componentDidMount() {
    console.log("App-Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    //filter method if you want to get all items except the given id inside the filter
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    //we never update directly the state instead we clone it then set the state
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App-Rendered");
    //when a component is rendered all of its childredn is rendered recursively
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
