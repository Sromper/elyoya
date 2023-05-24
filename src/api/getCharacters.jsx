import React from "react";
import axios from "axios";

const urlApi = "https://rickandmortyapi.com/api/character";

export const fetchData = async () => {
  try {
    const response = await axios.get(urlApi);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataBuscar = async (idCharacter) => {
  const urlApiBuscar = `https://rickandmortyapi.com/api/character/${idCharacter}`;

  try {
    const response = await axios.get(urlApiBuscar);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataBuscarNombre = async (nombreCharacter) => {
  const urlApiBuscar = `https://rickandmortyapi.com/api/character/${idCharacter}`;

  try {
    const response = await axios.get(urlApiBuscar);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataEquipos = async () => {
  const respuesta = await axios.get("http://localhost:3001/equipos");
  return respuesta;
};

export const axiosPut = async (data, id) => {
  const result = await axios({
    method: "put",
    url: `http://localhost:3001/equipos/${id}`,
    data,
  });
};

export const axiosDelete = async (id) => {
  const result = axios({
    method: "delete",
    url: `http://localhost:3001/equipos/${id}`,
  });
};

export const axiosPost = async (data) => {
  const resultado = await axios({
    method: "post",
    url: "http://localhost:3001/equipos/",
    data,
  });
};
