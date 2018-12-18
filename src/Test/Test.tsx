import React, { Component } from "react";

interface ITestProps {
  text: string;
}

export default class Test extends Component<ITestProps> {
  public render() {
    return (
      <div>
        <h1>Hola Mundo</h1>
        {this.props.text}
      </div>
    );
  }
}
