import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test/Test";

class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <Test text="My text new" />
      </div>
    );
  }
}

export default App;
