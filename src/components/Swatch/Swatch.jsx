import React from 'react';
import './Swatch.scss';

const Swatch = ({ hex }) => {
  var regex = new RegExp( /^([0-9A-Fa-f]{2})+$/ );
  let render;

  if(hex.length < 1) {
    render = <p>Type to search ...</p>;
  } else {
    if(regex.test(hex)) {
      render = <p>{hex} success</p>;
    } else {
      render = <p>{hex} fail</p>;
    }
  }

  return (
    <React.Fragment>
      <div>
        {render}
      </div>
    </React.Fragment>
  );
}

export default Swatch;