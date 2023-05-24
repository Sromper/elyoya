import React, { useEffect, useState } from "react";
import { fetchDataEquipos, axiosDelete, axiosPost } from "../api/getCharacters";
import { useNavigate } from "react-router-dom";
import BotonActualizar from './BotonActualizar'
import BotonBorrar from "./BotonBorrar";

function MostrarEquipos() {
  const [equipos, setEquipos] = useState([]);
  const [equipo, setEquipo] = useState("");
  const [pais, setPais] = useState("");
  const [actualizar, setActualizar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  

  const handleClickDelete = (id) => {
    axiosDelete(id).then((data) => {
      console.log("Borrar");
    });
    setActualizar(!actualizar);
  };

  const handleClickActualizar = (id) => {
    /* console.log(e.target.value);
    const id = e.target.value; */
    navigate(`/update/${id}`);
    setActualizar(!actualizar);
  };

  const handleChangeEquipo = (e) => {
    setEquipo(e.target.value);
  };

  const handleChangePais = (e) => {
    setPais(e.target.value);
  };
  const handleClickCreate = (e) => {
    e.preventDefault();
    const equipoInsertar = {
      equipo: equipo,
      pais: pais,
    };
    console.log(equipoInsertar);
    axiosPost(equipoInsertar).then((data) => {
      console.log("Insertao");
      setActualizar(!actualizar);
    });
  };

  

  useEffect(() => {
    fetchDataEquipos().then((data) => {
      console.log(data.data);
      setEquipos(data.data);
    });
  }, [actualizar]);

  return (
    <>
      {equipos.map((e) => (
        <div key={e.id}>
          <p>
            {e.id} {e.equipo} {e.pais}
          </p>
          <BotonActualizar id={e.id} handleClickActualizar={handleClickActualizar}/>
          <BotonBorrar id={e.id} handleDelete={handleClickDelete}/>
        </div>
      ))}
      <br />
      <br />
      <div>
        <form>
          <input type="text" onChange={handleChangeEquipo} />
          <input type="text" onChange={handleChangePais} />
          <button onClick={handleClickCreate}>Crear</button>
        </form>
      </div>
    </>
  );
}

export default MostrarEquipos;
