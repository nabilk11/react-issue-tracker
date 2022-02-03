import React from 'react';
import { useState, useEffect } from 'react';
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/CurrentIssue/CurrentIssue';
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className="App">
      <h1>Issue Tracker 1.0</h1>
      <div className="grey-card-container">
      { addIssue ? <AddIssue/> : <CurrentIssue/>}
      </div>
    <div className="buttons">
<button className="view-button">Current Issues</button>
<button className="add-button active-button">  Add Issue  </button>

    </div>
    </div>

  );
}

export default App;
