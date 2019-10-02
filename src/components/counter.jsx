import React, { Component } from "react";

// since we will be making this a controlled state the state will no lnger be needed instead we will be getting this via props
// then we transfer data to the associated components via events


class Counter extends Component {
  /* state = {
    value: this.props.counter.value */
    /* tags: ["tag1", "tag2", "tag3"] */
    /* imageUrl: "https://picsum.photos/200" */
  /* }; */

  /*   styles = {
    fontSize: 50,
    fontWeight: "bold"
  }; */

  /*   constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
  //we can use above code for binding Event Handlers
  //or we can just convert the handleIncrement function to arrow function

  //conditional rendering
 /*  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
          //key should always be unique
        ))}
      </ul>
    );
  } */


  // we no longer needed this handleIncrement since we will be using the counters.jsx so we can have a single source of truth or a single state 
  /* handleIncrement = product => {
    console.log(product); */
    /* console.log("increment Clicked", this); */
  /*   this.setState({ value: this.state.value + 1 });
    // we use setState whenever we update the state
  }; */

  render() {
    return (
      //instead of <div> we can use <React.Fragment> so that it will not create another div in a dom
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* below style format is for the inline style */}
        {/* we can use {this.styles} to reference to the style object */}
        {/* {this.props.children} we can use this to render childrens */}
        <span /* style={{ fontSize: 30 }} */ className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //note that we are not calling the method, we are just passing reference to it
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </div> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //we use below const as an object de structuring since the this.state.count is redundant in our if-else statement
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
