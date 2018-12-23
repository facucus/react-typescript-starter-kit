import React from "react";

interface IFormProps {
  onClick: () => void;
}

const Form: React.SFC<IFormProps> = props => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="username" name="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          name="password"
        />
      </div>

      <button type="button" onClick={props.onClick}>
        Click to Login
      </button>
    </form>
  );
};

export default Form;
