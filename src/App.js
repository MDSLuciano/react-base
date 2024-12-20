import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </ Router>
    </Provider>
  );
}

export default App;
