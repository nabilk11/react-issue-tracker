import React from 'react';


import './addissue.css';

export default function AddIssue() {
  

  return (
    <div className="add-issue">
      
<form action="">
<label htmlFor="">
        Issue Title
        <input type="text" />
        </label>
    <label htmlFor="">
        Description
        <input placeholder="Description of Issue" type="text" />
        </label>
        <label htmlFor="">
            Assign To
        <select name="devSel" id="devSel">
        <option value="devOne">Dev One</option>
        <option value="devTwo">Dev Two</option>
        <option value="devThree">Dev Three</option>
        <option value="devFour">Dev Four</option>
        </select>
        </label>
        <label htmlFor="">
            Priority 
        <select name="prioritySel" id="prioritySel">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="VeryHigh">Very High</option>
        </select>
        </label>
        <label htmlFor="">
            Severity 
        <select name="prioritySel" id="prioritySel">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="VeryHigh">Very High</option>
        </select>
        </label>
        <button type="submit">Add New Issue</button>
</form>
    </div>

  );
}

