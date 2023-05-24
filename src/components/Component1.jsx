import React, { useContext } from "react";
import { UserContext } from "../context/user";
function Component1() {
  const user = useContext(UserContext);
console.log(user)
  return (
    <div>
      <h2>Welcome, {user[0].name}</h2>
      <p>Your email is {user[0].email}</p>
    </div>
  );
}

export default Component1;
