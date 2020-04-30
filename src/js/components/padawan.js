import React, { useState, useEffect } from "react";

const Padawan = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.handleClickPadawan(props.name)}>
        click me !
      </button>
    </li>
  );
};

export default Padawan;
