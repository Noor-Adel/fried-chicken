import React from 'react'

const UserCards = (props) => {
  console.log(props);
    return (
      <div className="Card">
        <h1>{props.name}</h1>
        <label className="Sub-Text">{"My location is: " + props.Location}</label>
        <label className="Sub-Text">{"My Rate is: " + props.Rate}</label>
      </div>
    );
  };
  
  export default UserCards;
  