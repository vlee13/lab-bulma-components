import React from "react";

const CoolButton = (props) => {
  return <button class={`button ${props.classes}`}>{props.name}</button>;
};

export default CoolButton;
