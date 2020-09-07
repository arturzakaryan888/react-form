import React from "react";
import "./input.css";
function Input(props) {
  let handleChange = (e) => {
    props.setForm(e.target.value)
  }
  return (
    <div className="input-container">
      {props.label ? <label className="label">{props.label}</label> : null}

      <input
        className="input"

        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
        
      />
    </div>
  );
}

export default Input;
