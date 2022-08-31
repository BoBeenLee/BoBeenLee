import React from "react";
import { render } from "ink";
import { BoBeenLee } from "./bobeenlee";

const cli = {
  run() {
    render(React.createElement(BoBeenLee));
  },
};

export = cli;
