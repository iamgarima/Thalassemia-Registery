import React from 'react';
import 'materialize-css/bin/materialize.css';
import '../../assets/styles/main.css';

const PatientList = () => {
  return (
    <div className="row data-container">
      <div className="col s10">
        <div className="row header-row">
          <ul>
            <li className="col s1"></li>
            <li className="col s5">Name</li>
            <li className="col s4">D.O.B</li>
            <li className="col s2">Type</li>
          </ul>
        </div>  
        <div className="row content-row">
          <ul>
            <li className="col s1">1</li>
            <li className="col s5">Alvin Eclair</li>
            <li className="col s4">09/07/1990</li>
            <li className="col s2">A</li>
          </ul>
        </div>     
      </div>
    </div>  
  )
}

export default PatientList;