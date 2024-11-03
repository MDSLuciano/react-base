import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// Definindo as propriedades padrão por isso isClosed não é obrigatorio.
export default function MyRoutes({ component: Component, isClosed = false, ...rest }) {
  const isLoggedId = true;

/*
Essa funcão irá redirecionar o usuario para a rota /login
caso o usuario esteja tentando acessar uma rota que precise de autenticacao,
e depois ele retorna o usuario para a rota que ele estava antes de ser redirecionado.
*/
  if (isClosed && !isLoggedId) {
    return (
    <Redirect
      to={{pathname: "/login", state:{ prevPath: rest.location.pathname} }}
    />);
  }

  return <Route {...rest} component={Component} />;
}



MyRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])//ele pode ser um elemento ou uma função
    .isRequired,
  isClosed: PropTypes.bool,
};
