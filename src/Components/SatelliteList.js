import React from 'react';
import './SatelliteList.css';

/* Creates a new row with the appropiate Satellite information. */
const NewTableRow = (props) => {
    const item = props.props;
    const success = (item.success) ? 'Yes' : 'No';

    return (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{success}</td>
            <td>{item.date_utc.slice(0,10)}</td>
        </tr>
    );
}

/* Filters the data to be shown according to the options selected.
 * Only one filter works at a time.
 */
function dataToDisplay (dataF, searchFor, showAll, datePicked) {
    var result = dataF;
    if (searchFor) {
        result = dataF.filter(item => item.name.includes(searchFor));
    } else if (!showAll) {
        result = dataF.filter(item => item.success);
    } else if (datePicked) {
        const newDate = new Date(datePicked);
        console.log(newDate);
        const isTheDate = (item) => {
            var aux_date = new Date(item.date_utc) 
            return aux_date >= newDate;
        }
        result = dataF.slice(dataF.findIndex(isTheDate));
    }
    return result;
}

/* Renders the table with the appropiate information. */

function SatelliteList({dataF, searchFor, showAll, datePicked}) {
    
    var newData = dataToDisplay(dataF, searchFor, showAll, datePicked);
    console.log(newData, searchFor, showAll, datePicked);

    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr key="header-row">
                        <th>Satellite Name</th>
                        <th>Launched successfully?</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map(item => <NewTableRow props={item} />)}   
                </tbody>
            </table>
        </div>
    );
}

export default SatelliteList;