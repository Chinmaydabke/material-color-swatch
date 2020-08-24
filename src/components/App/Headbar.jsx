import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from "@material-ui/core";
import PaletteIcon from '@material-ui/icons/Palette';
import CodeIcon from '@material-ui/icons/Code';
import './Headbar.scss';

const Headbar = () => {
  const goToPortfolio = () => {
    window.open("https://chinmaydabke.com", "_blank");
  }

  return (
    <React.Fragment>
      <AppBar className="headbar" position="fixed" elevation={0}>
        <Toolbar className="toolbar">
          <div className="logo-area">
            <PaletteIcon className="logoIcon" />
            <Typography className="logoText">
              Material Color Swatch
            </Typography>
          </div>
          <div>
            <Button
              size="large"
              className="button"
              onClick={() => goToPortfolio()}
              startIcon={<CodeIcon />}
            >
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