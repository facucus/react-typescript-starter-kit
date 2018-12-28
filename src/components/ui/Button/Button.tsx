import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

interface IButtonProps {
  onClick: (evt: React.FormEvent<HTMLElement>) => void;
  type?: string;
  styleType?: string;
}

const Button: React.SFC<IButtonProps> = props => {
  const btnStyles = cx(styles.button, styles[props.styleType || "primary"]);
  return (
    <button
      type={props.type || "button"}
      className={btnStyles}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
