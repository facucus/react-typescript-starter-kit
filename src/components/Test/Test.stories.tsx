import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import Test from "./Test";

storiesOf("TestComponent", module).add("default", () => (
  <Test text={text("Main text", "Facundo")} />
));
