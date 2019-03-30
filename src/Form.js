import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.loadWeather}>
        <input name="city" placeholder="city" />
        <button>Get weather</button>
      </form>
    </div>
  );
};

export default Form;
