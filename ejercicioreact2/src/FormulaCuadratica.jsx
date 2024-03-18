import React, { useEffect,useState } from 'react';

 const FormulaCuadratica = () => {

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calculateQuadraticFormula = () => {
    const discriminant = (b * b) - (4 * a * c);
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`x(1): ${root1}, x(2): ${root2}`);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setResult(`X: ${root}`);
    } else {
      setResult('Valor irreal');
    }
  }

  return (
    <div>
      <h2> Formula Cuadratica</h2>
      <div>
        <label>          
          <span class="input-group-text" id="basic-addon1">Ingrese el Valor de (a) </span>
          <input type="number" className="form-control" placeholder="Ingrese valor de (a)" value={a} onChange={(e) => setA(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>         
          <span class="input-group-text" id="basic-addon1">Ingrese el Valor de (b) </span>
          <input type="number" className="form-control" placeholder="Ingrese valor de (b)" value={b} onChange={(e) => setB(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>         
          <span class="input-group-text" id="basic-addon1">Ingrese el Valor de (c) </span>
          <input type="number" className="form-control" placeholder="Ingrese valor de (c)" value={c} onChange={(e) => setC(parseFloat(e.target.value))} />
        </label>
      </div>
      <button type="button" className="btn btn-success" onClick={calculateQuadraticFormula}>Calcular</button>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default FormulaCuadratica;
