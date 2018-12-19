import React from "react";
import { storiesOf } from "@storybook/react";
import Test from "./Test";

storiesOf("TestComponent", module).add("default", () => (
  <Test text="Facundo" />
));
