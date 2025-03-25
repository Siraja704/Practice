import React from "react";

function Fucntion() {
  function clickHandler() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <div>This is the click Function Button</div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Fucntion;
