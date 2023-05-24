import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function hola() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      {params.id}
      holaaa
    </div>
  );
}

export default hola;
