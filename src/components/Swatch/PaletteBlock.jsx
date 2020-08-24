import React from 'react';
import { Typography, Button, IconButton, TableRow, TableCell } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import './PaletteBlock.scss';

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


const PaletteBlock = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const {r, g, b} = hexToRgb(item.hex);
  const rgbString = "rgb(" + r + ", " + g + ", " + b + ")";

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const copyHexToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = item.hex;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setOpen(true);
  }

  const copyRGBToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = rgbString;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <TableRow className="palette-block-component">
        <TableCell>
          <div className="value-text-container">
            <Typography className="value-text">{item.value}</Typography>
          </div>
        </TableCell>
        
        <TableCell className="palette-block" style={{ backgroundColor: item.hex }}>
        </TableCell>
        
        <TableCell className="hex-text-container">
          <Button
            className="hex-text-button"
            onClick={copyHexToClipboard}
          >
            <Typography className="hash-text">#</Typography>
            <Typography className="hex-text">{item.hex.slice(1)}</Typography>
          </Button>
        </TableCell>
        <TableCell className="rbg-text-container">
          <Button
            className="hex-text-button"
            onClick={copyRGBToClipboard}
          >
            <Typography className="rgb-text">{rgbString}</Typography>
          </Button>
        </TableCell>
      </TableRow>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to Clipboard!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default PaletteBlock;