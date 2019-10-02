import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          //for the value inputed to counter components, this will now be under the props property
          //props object is only read-only
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
