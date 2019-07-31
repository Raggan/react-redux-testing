import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("Box");

  ReactDOM.unmountComponentAtNode(div);
});
