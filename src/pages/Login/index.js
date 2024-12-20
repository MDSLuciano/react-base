import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import * as examplesActions from "../../store/modules/example/actions";


export default function Login() {
  const dispatch = useDispatch();


  function handleClick(e) {
    e.preventDefault();

    dispatch(examplesActions.clicaBotao());
  }

  return (
    <Container>
      <Title>
      Login
        <small>paeg</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</ Paragrafo>
      <button type="button" onClick={handleClick}>Enviar</button>
    </ Container>
  );
}
