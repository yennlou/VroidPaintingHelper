import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";

function HelloMessage(props) {
  return <div className="text-blue-600">Hello, {props.name}</div>;
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<HelloMessage name="Jackey"></HelloMessage>);
