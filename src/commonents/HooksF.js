import React, { useState } from "react";
import Hello from "./hello";

function HooksF() {
  const [text, SetText] = useState("");

  function ChangeHandler(event) {
    SetText(event.target.value);
  }

  return (
    <div className="Counter-container">
      <div id="para">{text}</div>
      <input
        onChange={ChangeHandler}
        name="text"
        placeholder="Input Something"
      />
    </div>
  );
}

export default HooksF;
