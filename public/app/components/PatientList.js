import React from 'react';
import 'materialize-css/bin/materialize.css';

const PatientList = () => {
  return (
    <div className="row table-container">
      <div className="col s8">
        <table className="striped">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alvin Eclair</td>
                <td>08/05/1990</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>    
      </div>
    </div>  
  )
}

export default PatientList;