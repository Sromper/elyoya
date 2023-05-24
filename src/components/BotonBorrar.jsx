import React from "react";
import { axiosDelete } from "../api/getCharacters";

function BotonBorrar({ id, handleDelete }) {
  const handleClickDelete = (e) => {
    handleDelete(id);
  };

  return (
    <div>
      <button onClick={handleClickDelete} value={id}>
        Borrar
      </button>
    </div>
  );
}

export default BotonBorrar;
