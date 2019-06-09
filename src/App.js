import React, { Component } from "react";

// import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import SearchForm from "./components/searchform";

// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  // state = {

  // };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <SearchForm />
      </React.Fragment>
    );
  }
}

export default App;
