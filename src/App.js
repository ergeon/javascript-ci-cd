import React, { Component } from "react";
import Counter from "./components/Counter";


class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
