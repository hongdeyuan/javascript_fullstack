import React from 'react';
import './App.css';
import ButtonS from './components/Buttons/Button.tsx'
import BadageS from './components/Badage/Badage.tsx'
import Icons from './components/Icons/Icons.tsx'
import { ProgressBar } from 'wizard-ui';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ProgressBar />
        <div className="button">
          <span>Button: </span>
          <ButtonS className="buttons" />
        </div>
        <div className="badage">
          <p>Badage: </p>
          <BadageS className="badages" />
        </div>
        <div className="icon">
          <p>icon: </p>
          <Icons className="icons" />
        </div>
      </header>

    </div>
  );
}

export default App;
