import React from 'react';
import Palette from "./Palette";
import './Swatch.scss';

const Swatch = ({ hex }) => {
  var regex = new RegExp( /^([0-9A-Fa-f]{2})+$/ );
  let render;

  if(hex.length < 1) {
    render = <p></p>;
  } else {
    if(regex.test(hex)) {
      render = <Palette hex={hex} />;
    } else {
      render = <p>Invalid input</p>;
    }
  }

  return (
    <React.Fragment>
      <div className="swatch-component">
        {render}
      </div>
    </React.Fragment>
  );
}

export default Swatch;