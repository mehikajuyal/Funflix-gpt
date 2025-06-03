// const parent = React.createElement('h1', {},"Hello World" );
const parent = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "This is heading 1"),
    React.createElement("h1", { id: "heading2" }, "This is heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "This is heading 1"),
    React.createElement("h1", { id: "heading4" }, "This is heading 2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
