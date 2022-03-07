import React from 'react';
import './Options.css';


/* Options component in which the possible data options/filters 
 * are displayed and their uses are handled.
 */
const Options = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(e.target[0].value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.onSubmit("");
  }

  const handleChange = (e) => {
    props.onChange(e.target.checked);
  }

  const handleDate = (e) => {
    e.preventDefault();
    props.onDate(e.target[0].value);
  }

  return (
    <div className="optionsContainer">
      <div className="Side-header">
      <img src="https://img.icons8.com/external-others-made-by-made/
        100/000000/external-astronomy-space-others-made-by-made-62.png"/>
          <p id="side">Satellite coordination system</p>
      </div>
      <div className="searchBar">
        <p> Search for a satellite:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" id="searchname" name="sname" 
            placeholder="Search"
            />
          <button id="searchname">Search</button> 
        </form>

        <input type="button" onClick={handleClick} 
          value="Show All" id="showall" /> <br />
      </div>

      <div className="successfulOnly">
        <label for="showAll">Show successful launches only:</label>
        <input type="checkbox" name="showAll" value="showAll"
          onChange={handleChange} />
      </div>

      <div className="pickDate">
        <form onSubmit={handleDate}>
          <label for="pickDate" id="datelabel">
            Show satellites launched after the date:
          </label>
          <input type="date" name="pickDate" id="searchdate"/>
          <button id="searchname">Search</button> 
        </form>
      </div>
    </div>
  );
}

export default Options;