import React from "react";

const CoolButton = (props) => {
  return <button className={`button ${props.classes}`}>{props.name}</button>;
};

export default CoolButton;
