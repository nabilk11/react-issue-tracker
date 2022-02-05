import React from 'react';
import { useState } from 'react';
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/CurrentIssue/CurrentIssue';
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)

  const showAddIssue = () => {
      setAddIssue(true)
  }

const showCurrentIssue = () => {
    setAddIssue(false)
}
  return (
    <div className="App">
      <h1>unbugify <br/>
        <small>issue tracker 1.0</small></h1>
      <div className="grey-card-container">
      { addIssue ? <AddIssue/> : <CurrentIssue/>}
      </div>
    <div className="buttons">
<button className="view-button" onClick={() => showCurrentIssue()}>Current Issues</button>
<button className="add-button active-button" onClick={() => showAddIssue()}>Add Issue</button>

    </div>
    </div>

  );
}

export default App;
