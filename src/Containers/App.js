import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "../Components/Nav";
import Main from "./Main";
import { configureStore } from "../Store";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <div className="App">
            <Nav />
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
