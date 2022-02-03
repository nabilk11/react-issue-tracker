import React from 'react';
import { useState, useEffect } from 'react';
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/AddIssue/CurrentIssue';
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className="App">
      <h1>Issue Tracker 1.0</h1>
      { addIssue ? <AddIssue/> : <CurrentIssue/>}
    <div className="buttons">
<button>Current Issues</button>
<button>Add Issue</button>

    </div>
    </div>

  );
}

export default App;
