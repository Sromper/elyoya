import React from "react";

function BotonActualizar({ id , handleClickActualizar}) {
  
    const handleClick=()=>{
        handleClickActualizar(id)
    }

  return (
    <div>
      <button onClick={handleClick} id={id}>
        Actualizar
      </button>
    </div>
  );
}

export default BotonActualizar;
