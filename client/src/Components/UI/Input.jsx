import React from "react";

function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
}

export default Input;
