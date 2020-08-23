import React from 'react';
import {
  AppBar, Toolbar, Typography
} from "@material-ui/core";
import BrushIcon from '@material-ui/icons/Brush';
import './Headbar.scss';

const Headbar = () => {
  return (
    <React.Fragment>
      <AppBar className="headbar" position="fixed">
        <Toolbar className="toolbar">
          <BrushIcon />
          <Typography className="logoHeadbar">
            Material Color Swatch
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Headbar;