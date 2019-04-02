import React from "react";

const Form = (props, getCoordsWeather) => {
  return (
    <div>
      <form onSubmit={props.loadInputWeather}>
        <input type="text" name="city" placeholder="Enter city" required />

        <button>Get weather</button>
      </form>
    </div>
  );
};

export default Form;
