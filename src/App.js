import React, { useState } from "react";
import "./App.css";
import UserCards from "./component/UserCards";
import AddUser from "./component/AddUser";
import DeleteUser from "./component/DeleteUser";

export default function App() {
  const [users, setUsers] = useState({
    userList: [
      { id: 1, name: "Jack", Location: "mansure", Rate: 1 },
      { id: 2, name: "Jill", Location: "al-adhamiya", Rate: 3 },
      { id: 3, name: "James", Location: "hurriya", Rate: 2 },
       { id: 4, name: "frade", Location: "hurriya", Rate: 4 }
    ]
  });
  const AddUserHandler = (userID, userName, userLocation, userRate) => {
    setUsers({
      userList: [...users.userList,
        { id: userID, name: userName, Location: userLocation, Rate: userRate }
      ]
    });
  };

  const DeleteUserHandler = (userName) => {
    let index,
      count = 0;
    let usersList = [...users.userList];
    users.userList.map((element) =>
      element.name === userName ? (index = count) : count++
    );
    usersList.splice(index, 1);
    setUsers({ userList: usersList });
  };
console.log(UserCards);
  return (
    <div className="App">
      <div className="Input-Comp">
        <AddUser
          add={AddUserHandler}
          id={users.userList[users.userList.length - 1].id}
        />
        <DeleteUser delete={DeleteUserHandler} />
      </div>

      <div className="All-Cards">
        {users.userList.map((element) => (
          <UserCards
            key={element.id}
            name={element.name}
            Location={element.Location}
            Rate={element.Rate}
          />
        ))}
      </div>
    </div>
  );
}
