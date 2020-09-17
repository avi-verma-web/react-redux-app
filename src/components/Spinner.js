import React from "react";

import gif from "./760.gif";

function Spinner() {
  return (
    <div>
      <img
        src={gif}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
