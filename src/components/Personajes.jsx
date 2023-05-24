import React from "react";

function Personajes({ id, name, image }) {
  return (
    <div key={id}>
      <p>{name}</p>
      <img src={image} />
    </div>
  );
}

export default Personajes;
