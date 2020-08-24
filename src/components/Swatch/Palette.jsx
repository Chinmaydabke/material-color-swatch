import React from 'react';
import './Palette.scss';

const Palette = ({ hex }) => {
  return (
    <React.Fragment>
      <div className="palette-component">
        {hex} palette
      </div>
    </React.Fragment>
  );
}

export default Palette;