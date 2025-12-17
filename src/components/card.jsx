import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {

    console.log(props);
   
  return (
    <div className="card">

    <div className="top">
      <img src={props.brandLogo}></img>
      <button>Save <Bookmark size={13}/> </button>
    </div>
    
    <div className="centre">
     <h3>{props.company}<span>{props.posted}</span></h3>
     <h2>{props.title}</h2>
     <div>
      <h4>{props.employmentType}</h4>
      <h4>{props.level}</h4>
     </div>
    
    </div>
    
    <div className="bottom">
    <div>
    <h3>{props.salary}</h3>
    <p>{props.location}</p>
    
    </div>
    
    <button> {props.applyText}</button>
    
    </div>
    
    </div>

  )
}

export default card
