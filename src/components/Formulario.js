import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import useMoneda from "../hooks/useMoneda";
import useCriptomonedas from "../hooks/useCriptomonedas";

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
  // state del listado de criptomonedas
  const [listaCripto, setListaCripto] = useState([]);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Méxicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  //utilizando el useMoneda- orden del array [state, interfaz setState]
  const [monenda, SelectMonedas] = useMoneda("Elige tu moneda", MONEDAS);
  const [criptomoneda, SelectCriptomoneda] = useCriptomonedas(
    "Elige tu critomoneda",
    listaCripto
  );

  //llamado a la api
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await axios.get(url);
      setListaCripto(res.data.Data);
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMonedas />
      <SelectCriptomoneda />
      <Btn type="submit" value="calcular" />
    </form>
  );
};

export default Formulario;
