import React, { useState } from "react";

const DeleteUser = (props) => {
  const [userName, setUserName] = useState("");
  return (
    <div className="Delete">
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        className="Inputs"
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        className="Function-Buttons"
        type="button"
        value="DeteleUser"
        onClick={() => props.delete(userName)}
      />
    </div>
  );
};

export default DeleteUser;
