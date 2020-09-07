import React from "react";
import "./button.css";

function Button(props) {
  if (!props) {
    props.class = "primary";
  }
  return (
    <button
      type={props.type}
      className={"btn " + props.class}
      onClick={(props.type !== "submit" && props.onClick) ? () => props.onClick() : null}
    >
      {props.text}
    </button>
   
    
  );
};

export default Button;
