import React from 'react';
import { Table, TableBody } from "@material-ui/core";
import PaletteBlock from "./PaletteBlock";
import './Palette.scss';


// Converting HEX to RGB - https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Converting RBG to HEX - https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


const Palette = ({ hex }) => {
  const pallete = [];
  const {r, g, b} = hexToRgb(hex);
  const strengths = [0.05];
  for (let i = 1; i < 10; i++) {
    strengths.push(0.1 * i);
  }
  
  for(let i=0; i<strengths.length; i++) {
    const ds = 0.5 - strengths[i];
    const value = Math.round(strengths[i] * 1000);
    const newR = r + Math.round((ds < 0 ? r : (255 - r)) * ds);
    const newG = g + Math.round((ds < 0 ? g : (255 - g)) * ds);
    const newB = b + Math.round((ds < 0 ? b : (255 - b)) * ds);
    const newHex = rgbToHex(newR, newG, newB);
    pallete.push({
      value: value,
      hex: newHex
    });
  }

  return (
    <React.Fragment>
      <div className="palette-component">
        <Table>
          <TableBody>
            {pallete.map(item => {
              return (
                <PaletteBlock item={item} key={item.value+item.hex} />
              )
            })}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}

export default Palette;