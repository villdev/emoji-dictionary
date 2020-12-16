import React from "react";
import Menu from "./js/Menu";
import Content from "./js/Content";
import Sidebar from "./js/Sidebar";
import "./css/style.css";

export default function App() {
  return (
    <div className="wrapper">
      <Menu />
      <Content />
      <Sidebar />
    </div>
  );
}
