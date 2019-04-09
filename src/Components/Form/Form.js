import React from "react";

const Form = props => {
  return (
    <div className={`search-wrapper${props.visible === true ? 'toggle' : ''}`}>
      <form onSubmit={props.loadInputWeather}>
        <input type="text" name="city" placeholder="Enter city" required />
        <button>Get weather</button>
      </form>
    </div>
  );
};

export default Form;
