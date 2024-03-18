import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormulaCuadratica } from './FormulaCuadratica';
import './App.css';

function App() {
  return (
    <> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<FormulaCuadratica/>} />
        </Routes>
      </BrowserRouter> 
    </> 
  )
}

export default App;
