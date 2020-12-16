import React from "react";
import { render } from "react-dom";
import ListItem from "./ListItem";

const App = () => {
  return (
    <div>
      <h1 id="something-important">List</h1>
      <ListItem name="List Item 1" />
      <ListItem name="List Item 2" />
      <ListItem name="List Item 3" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
