import React from "react";
import styled from "styled-components";

import useMoneda from "../hooks/useMoneda";

const Btn = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  //utilizando el useMoneda- orden del array [state, interfaz setState]
  const [monenda, SelectMonedas, actualizarState] = useMoneda();

  return (
    <form>
      <SelectMonedas />
      <Btn type="submit" value="calcular" />
    </form>
  );
};

export default Formulario;