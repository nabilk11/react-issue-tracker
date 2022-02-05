import React from 'react';


import './addissue.css';

export default function AddIssue() {
    const [title, setTitle] = useState(true)
    const [desc, setDesc] = useState(true)
    const [dev, setDev] = useState(true)
    const [priority, setPriority] = useState(true)
    const [severity, setSeverity] = useState(true)

  return (
    <div className="add-issue">
      
<form action="">
<label htmlFor="">
        Issue Title
        <input 
        id="title"
        type="text" 
        placeholder="Issue"
        onKeyUp={() => setTitle(document.getElementById("title").value)}/>
        </label>
    <label htmlFor="">
        Description
        <input 
        id="description"
        placeholder="Description of Issue" type="text" 
        onKeyUp={() => setDesc(document.getElementById("description").value)}/>
        </label>
        <label htmlFor="">
            Assign To
        <select 
        name="devSel" 
        id="devSel"
        onChange={() => setDev(document.getElementById("devSel").value)}>
        <option value="devOne">Dev One</option>
        <option value="devTwo">Dev Two</option>
        <option value="devThree">Dev Three</option>
        <option value="devFour">Dev Four</option>
        </select>
        </label>
        <label htmlFor="">
            Priority 
        <select 
        name="select" 
        id="prioritySel"
        onChange={() => setPriority(document.getElementById("prioritySel").value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="VeryHigh">Very High</option>
        </select>
        </label>
        <label htmlFor="">
            Severity 
        <select 
        name="select" 
        id="severitySel"
        onChange={() => setSeverity(document.getElementById("severitySel").value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="VeryHigh">Very High</option>
        </select>
        </label>
        <button 
        type="submit"
        onSubmit={(e) => {
            e.preventDefault() 
        }}>Add New Issue</button>
</form>
    </div>

  );
}

