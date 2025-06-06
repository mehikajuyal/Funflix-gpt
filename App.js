import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement('h1', {},"Hello World" );
const parent = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "This is heading 1"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "This is heading 2"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h3",
      { id: "heading3", key: "heading3" },
      "This is heading 3"
    ),
    React.createElement(
      "h4",
      { id: "heading4", key: "heading4" },
      "This is heading 9"
    ),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
