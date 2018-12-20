import React, { Component } from "react";
import styles from "./styles.module.scss";
interface ITestProps {
  text: string;
}

export default class Test extends Component<ITestProps> {
  public render() {
    return (
      <div>
        <h1 data-testid="title-text">Hola Mundo</h1>
        <p className={styles.text}>{this.props.text}</p>
      </div>
    );
  }
}
