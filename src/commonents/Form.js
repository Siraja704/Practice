import React from "react";

function Form() {
  return (
    <div>
      <div>Name</div>
      <input id="Name" type="text" />
      <div>Email</div>
      <input id="Email" type="Email" />
      <div>Date Of birth</div>
      <input type="date" name="Date" id="date" />

      <form>
        <label htmlFor="Gender">gender</label>
        <label htmlFor="Gender">Male</label>

        <input type="radio" name="gender" id="Male" />
        <label htmlFor="Gender">Female</label>
        <input type="radio" name="gender" id="Female" />
      </form>
    </div>
  );
}

export default Form;
