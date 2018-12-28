import React from "react";
import Button from "../../../ui/Button";
import styles from "./form.module.scss";

interface IFormProps {
  username?: string;
  password?: string;
  onClick: () => void;
  onChangeInput: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IEventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}

class Form extends React.Component<IFormProps> {
  private handleSubmit = (evt: React.FormEvent<IEventTarget>): void => {
    evt.preventDefault();
    this.props.onClick();
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="username"
            name="username"
            onChange={this.props.onChangeInput}
            value={this.props.username}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={this.props.onChangeInput}
            value={this.props.password}
          />
        </div>
        <Button type="submit" onClick={this.handleSubmit}>
          Click to Login
        </Button>
      </form>
    );
  }
}

export default Form;
