import React, { useState } from 'react';
import { Typography, Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Input.scss';

const Input = ({ inputCallback }) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 13){
      setInput(event.target.value);
      inputCallback(input);
   }
  }

  return (
    <React.Fragment>
      <div className="input-component">
        <Paper className="text-field">
          <div className="prefix-area">
            <Typography className="prefix-text">
              #
            </Typography>
          </div>
          <InputBase
            className="input-base"
            placeholder="Enter Hex Value"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
          <Divider orientation="vertical" />
          <div className="search-button-area">
            <IconButton
              color="primary"
              aria-label="directions"
              className="search-button"
              onClick={() => inputCallback(input)}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default Input;