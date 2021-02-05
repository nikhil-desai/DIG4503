import React from "react"
import './homepage.css';

function HomePage(props) {

    return (
      <div>
          <h1 className="text">{props.firstName}</h1>
      </div>
    )
  }
  
  export default HomePage