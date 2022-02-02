import React from 'react';
import { useState, useEffect } from 'react';
import AddIssue from './components/AddIssue/AddIssue'
import './App.css';

function App() {
  const [addIssue, setAddIssue] = useState(true)
  return (
    <div className="App">
      <h1>Issue Tracker 1.0</h1>
      { addIssue ? <AddIssue/> : <CurrentIssue/>}
    </div>
  );
}

export default App;
