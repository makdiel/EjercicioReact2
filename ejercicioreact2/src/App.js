import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  FormulaCuadratica  from './FormulaCuadratica';
import Formula from './componentes/Formula';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<FormulaCuadratica/>} />
          <Route path='/Formula' element= {<Formula/>} />
        </Routes>
      </BrowserRouter> 
      </>
  )
}

export default App;
