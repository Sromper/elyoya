import React, { useEffect, useState } from "react";
import { fetchDataBuscar } from "../api/getCharacters";
import Personaje from './Personajes'

function BusquedaMuestra() {
  const [character, setCharacter] = useState([]);
  const [id, setId] = useState('1');

  useEffect(() => {
    fetchDataBuscar(id).then((data) => {
      console.log(data);
      const dataArray = [data];
      setCharacter(dataArray);
    });
  }, [id]);


  const handleChange = (evt) => {
    console.log(evt.target.value);
    setId(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
  };

  return (
    <div>
      <h1>Busqueda</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={id} />
          <button>Enviar</button>
        </form>
      </div>
      {id &&
        character.map((c) => (
          <div key={c.id}>
          <Personaje
          key={c.id}
          id={c.id}
          name={c.name}
          image={c.image}
          />
          </div>
        ))}
    </div>
  );
}

export default React.memo(BusquedaMuestra);
