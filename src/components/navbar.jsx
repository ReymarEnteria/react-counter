import React /* , { Component }  */ from "react";

//since we no longer use the class, we can now remove the {component} in the import section

//since this component only have a render method and do not have any state we call this a Stateless Functional Component
// some uses functional component if it is only a simple component
//since we uses functional component we need to add the prop as a parameter

// using object destructuring instead of repeating props.
//we use the {} for the object destructuring and place the properties were intrested in
const NavBar = ({ totalCounters }) => {
  console.log(`Navbar-Rendered`);
  //we cannot user life cycle hooks inside a functional component
  //life cycle hooks can only be used by class component

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

/* 

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
} */

export default NavBar;
