import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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

  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    //we never update directly the state instead we clone it then set the state
    counters[index].value++;
    this.setState({counters});
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          //for the value inputed to counter components, this will now be under the props property
          //props object is only read-only
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            /*  value={counter.value}
            id={counter.id} */
            //instead of above code in which individually adding properties you can just pass the object itself, it includes all we need in the counter
            //so if there are additional props. it is already in the object
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
