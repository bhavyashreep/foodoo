import React from "react";
import Navbar from "./components/Navbar";
import "./style.scss";

export default function LayoutProvider(props) {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />

      {props.children}
    </div>
  );
}
