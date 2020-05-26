import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const MOUNT_NODE = document.getElementById("app");

ReactDom.render(<App />, MOUNT_NODE);
