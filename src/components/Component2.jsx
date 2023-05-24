import React, { useContext } from "react";
import { UserContext } from "../context/user";
function Component1() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user[1].name}</h2>
      <p>Your email is {user[1].email}</p>
    </div>
  );
}

export default Component1;
 