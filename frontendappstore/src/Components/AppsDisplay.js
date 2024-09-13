import React from "react";
import './AppsDisplay.css';


const AppsDisplay =props => {

    const {appDetails} = props
    const {appName, imageUrl} = appDetails
  
    return (
    <li className="app-item">
          <img src={imageUrl} alt={appName} className="app-logo" />
          <p className="app-name">{appName}</p>
    </li>
    )
}

export default AppsDisplay;
