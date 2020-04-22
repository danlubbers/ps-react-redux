import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p> Test </p>;
}

render(<Hi />, document.getElementById("app"));
