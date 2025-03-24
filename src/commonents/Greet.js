import react from "react";

function Hello() {
  return (
    <div>
      <h1>Hello Siraj Ahmed here</h1>
    </div>
  );
}
let Greet = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Hello {props.Name} its working now </h1>
      {props.children}
    </div>
  );
};

export default Greet;
