import React from 'react';
import Palette from "./Palette";
import './Swatch.scss';

const Swatch = ({ hex }) => {
  var regex = new RegExp( /^([0-9A-Fa-f]{2})+$/ );
  let render;

  if(hex.length < 1) {
    render = <p></p>;
  } else {
    if(regex.test(hex) && hex.length <= 6) {
      render = <Palette hex={hex} />;
    } else {
      render = <p>{hex} is not a valid value</p>;
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