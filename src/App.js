import React, { useState , useEffect} from 'react';
import './App.css';
import DataFetch from './Components/DataFetch.js';
import Options from './Components/Options.js';


/* Main app component in which the options states' are set
 * and the Options and DataFetch components are called.
 */
const App = () => {

  useEffect(() => {
    document.title = 'Satellite Web';
  }, []);

  const [search, setSearch] = useState('');
  const [showAll, setShow] = useState(true);
  const [date, setDate] = useState('');
  
  const submit = (search) => {
    setSearch(search);
  }

  const change = (showAll) => {
    setShow(!showAll);
    console.log(showAll);
  }

  const dateSetter = (pick) => {
    setDate(pick);
  }


  return (
    <div className="App">
      <div className="App-body">
        <Options onSubmit={submit}
                 onChange={change}
                 onDate={dateSetter} />
        <DataFetch searchOption={search} 
                   showAllOpt={showAll} 
                   datePicked={date} />
      </div>
    </div>
  );
}

export default App;
