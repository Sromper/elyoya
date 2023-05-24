import React, { useEffect, useState } from "react";
import { fetchData } from "../api/getCharacters";

function Mostrar() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setCharacter(data);
    });
  }, []);

  return (
    <div>
      <h1>Holaa</h1>
      <ul>
        {character.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mostrar;
