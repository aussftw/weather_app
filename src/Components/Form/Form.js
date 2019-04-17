import React from "react";
// import "./Form.css"

const Form = props => {
  return (
    <div className={`search-wrapper ${props.visible === true ? 'toggle' : ''}`}>
      <div className="search-form-wrapper">
        <p className="p-header">Look at weather at any city</p>
        <form onSubmit={props.loadInputWeather} className="search-form">
          <input type="text" name="city" placeholder="Enter a city" className="input-data" required />
          <button className="input-button"><i className="large search icon" /></button>
        </form>
      </div>
    </div>
  );
};

export default Form;


