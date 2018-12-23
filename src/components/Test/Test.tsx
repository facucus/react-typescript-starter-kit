import React, { Component } from "react";
import styles from "./styles.module.scss";
interface ITestProps {
  text: string;
  onClick: () => void;
}

interface ITestState {
  counter: number;
}

export default class Test extends Component<ITestProps, ITestState> {
  public state = { counter: 0 };

  public onChangeCounter = () => {
    this.props.onClick();
    this.setState({
      counter: ++this.state.counter
    });
  };

  public render() {
    return (
      <div>
        <h1 data-testid="title-text">Hola Mundo</h1>
        <p className={styles.text}>{this.props.text}</p>
        <button onClick={this.onChangeCounter}>Click Me</button>
      </div>
    );
  }
}
