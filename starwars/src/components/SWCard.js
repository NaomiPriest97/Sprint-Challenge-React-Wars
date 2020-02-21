import React from "react";

const SWCard = (props)=> {
    return (
      <div className="img-list">
        <h2 className = "name">{props.name} </h2>
          <p>{props.species}</p>
          <p>{props.home}</p>
          <p>{props.films}</p>
        
      </div>
    );
  };
  export default SWCard;
  