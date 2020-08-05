import React, { Fragment, useState } from "react";

const useMoneda = () => {
  //state de custom Hook
  const [state, setState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </Fragment>
  );

  //Retornar state, interfaz, función que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
