import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from "@material-ui/core";
import BrushIcon from '@material-ui/icons/Brush';
import CodeIcon from '@material-ui/icons/Code';
import './Headbar.scss';

const Headbar = () => {
  return (
    <React.Fragment>
      <AppBar className="headbar" position="fixed" elevation={0}>
        <Toolbar className="toolbar">
          <div className="logo-area">
            <BrushIcon className="logoIcon" />
            <Typography className="logoHeadbar">
              Material Color Swatch
            </Typography>
          </div>
          <div>
            <Button size="large" className="button" startIcon={<CodeIcon />}>
              <span className="button-text">by </span>
              <span className="button-text-author">CD</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Headbar;