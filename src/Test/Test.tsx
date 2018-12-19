import React, { Component } from "react";

interface ITestProps {
  /** this dictates what the button should display**/
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
