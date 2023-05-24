import React from "react";

export const UserContext = React.createContext({
  name: "",
  email: "",
  isLoggedInt: false,
});

export const user = [
  { name: "Juan", email: "juan@gmail.com", isLoggedInt: true },
  { name: "yo", email: "yo@gmail.com", isLoggedInt: true },
  { name: "tu", email: "tu@gmail.com", isLoggedInt: true },
];
