// import dependencies

import React from "react";
import ReactDOM from "react-dom";

// A simple react component
const App = () => {
  const age = 12;
  const output = <span> James is {age} years old </span>;
  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };

  return (
    <React.Fragment>
      <h1> Hello World </h1>
      <p>{output}</p>
      <p>{customer.first_name}</p>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); // render element on div with ID of 'root'
