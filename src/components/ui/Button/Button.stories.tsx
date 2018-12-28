import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Button from ".";

storiesOf("UI/Button", module)
  .add("primary", () => (
    <Button onClick={action("button-click")}>
      {text("Button label", "Click Me")}
    </Button>
  ))
  .add("secondary", () => (
    <Button onClick={action("button-click")} styleType="secondary">
      {text("Button label", "Click Me")}
    </Button>
  ))
  .add("danger", () => (
    <Button onClick={action("button-click")} styleType="danger">
      {text("Button label", "Click Me")}
    </Button>
  ));
