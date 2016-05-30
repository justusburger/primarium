import React from "react";

export default (props) => {
  let className = 'loader';

  if(props.className)
    className += ' ' + props.className;

  return (
    <div class={ className }></div>
  );
}

