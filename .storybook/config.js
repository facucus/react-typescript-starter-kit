import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";

function loadStories() {
  const req = require.context("../", true, /\.stories\.tsx$/);

  setOptions({
    sortStoriesByKind: true,
    name: "Project name"
  });

  req.keys().forEach(filename => req(filename));
}

addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);

configure(loadStories, module);
