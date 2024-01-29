import { useState } from "react";
import styles from "./MultiDropDown.module.css";
const users = [
  {
    id: 1,
    name: "admin",
  },
  {
    id: 2,
    name: "member",
  },
  {
    id: 3,
    name: "client",
  },
];

const Dropdown = () => {
  const [userList, setuserList] = useState(users);
  const [userInput, setUserInput] = useState([]);

  const handleuserSelection = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setuserList(newUserList);
    const newUserInputArray = userList.filter((user) => user.id === id);
    setUserInput((prevState) => [...prevState, ...newUserInputArray]);
  };

  const handleuserUnselection = (id) => {
    const unselectUser = userInput.filter((user) => user.id !== id);
    setUserInput([...unselectUser]);
    const updatedList = userInput.filter((user) => user.id === id);
    setuserList((prev) => [...prev, ...updatedList]);
  };

  return (
    <div className={styles.dropDrownWrapper}>
      <div className={styles.searchedItem}>
        {Boolean(userInput.length) &&
          userInput.map((user) => {
            return (
              <li key={user.id} onClick={() => handleuserUnselection(user.id)}>
                {user.name} x
              </li>
            );
          })}
      </div>
      <div className={styles.suggestioBox}>
        {userList.map((user) => {
          return (
            <li key={user.id} onClick={() => handleuserSelection(user.id)}>
              {user.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
