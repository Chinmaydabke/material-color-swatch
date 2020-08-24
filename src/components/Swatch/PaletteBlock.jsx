import React from 'react';
import { Typography, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import './PaletteBlock.scss';

const PaletteBlock = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = item.hex;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <div className="palette-block-component">
        <div className="value-text-container">
          <Typography className="value-text">{item.value}</Typography>
        </div>
        
        <div className="palette-block" style={{ backgroundColor: item.hex }} />
        
        <div className="hex-text-container">
          <Button
            className="hex-text-button"
            onClick={copyToClipboard}
          >
            <Typography className="hash-text">#</Typography>
            <Typography className="hex-text">{item.hex.slice(1)}</Typography>
          </Button>
        </div>
      </div>
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