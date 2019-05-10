import React from "react";
import ReactDOM from "react-dom";
import { version } from "antd";
import DivisionCascader from "./DivisionCascader";
import "antd/dist/antd.css";

ReactDOM.render(
  <div style={{ margin: 24 }}>
    <p style={{ marginBottom: 24 }}>
      Current antd version: {version} <br />
      You can change antd version on the left panel (Dependencies section).
    </p>
    <DivisionCascader
      value={["宁夏", "吴忠"]}
      onChange={value => console.log(value)}
      style={{ width: 400 }}
    />
  </div>,
  document.getElementById("root")
);
