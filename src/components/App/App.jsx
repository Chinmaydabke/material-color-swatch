import React, { useState } from 'react';
import Headbar from "./Headbar";
import Input from "../Input/Input";
import './App.scss';

const App = () => {
  const [hex, setHex] = useState("");

  return (
    <React.Fragment>
      <div className="app-root">
        <Headbar />
        <div className="content-root">
          <Input inputCallback={setHex} />
        </div>
        <div>
          {hex}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
