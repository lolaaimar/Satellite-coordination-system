import React from 'react';
import SatelliteList from './SatelliteList.js'
import './DataFetch.css';


/* New class responsible for fetching the data.
 * Calls to render the table.
 */
class DataFetch extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            DataLoaded: false,
        };
    }
    
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://api.spacexdata.com/v5/launches/")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                data: json,
                DataLoaded: true,
            });
        })
        .catch(error => {
            console.log(error)
        });
    }
    
    render() {
        if (!this.state.DataLoaded) return <p>no data yet</p>
        return (
            <div className="App-List">
                <SatelliteList 
                    dataF={this.state.data} 
                    searchFor={this.props.searchOption}
                    showAll={this.props.showAllOpt}
                    datePicked={this.props.datePicked}/>
            </div>
        );
    }
}

export default DataFetch;