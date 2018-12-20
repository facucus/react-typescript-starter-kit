import React, { Component } from "react";

interface ITestProps {
  text: string;
}

export default class Test extends Component<ITestProps> {
  public render() {
    return (
      <div>
        <h1 data-testid="title-text">Hola Mundo</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
