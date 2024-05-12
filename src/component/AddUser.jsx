import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userRate, setUserRate] = useState();

  return (
    <div>
      <div className="Text-Comp">
        <input
          type="text"
          name=""
          id="userName"
          className="Inputs"
          placeholder="Name"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="text"
          name=""
          id="userLocation"
          className="Inputs"
          placeholder="Location"
          onChange={(event) => setUserLocation(event.target.value)}
        />
        <input
          type="text"
          name=""
          id="userReat"
          className="Inputs"
          placeholder="Rate"
          onChange={(event) => setUserRate(event.target.value)}
        />
      </div>

      <input
        type="button"
        value="Add User"
        className="Function-Buttons"
        onClick={() => props.add(props.id + 1, userName, userLocation, userRate)}
      />
    </div>
  );
};

export default AddUser;
