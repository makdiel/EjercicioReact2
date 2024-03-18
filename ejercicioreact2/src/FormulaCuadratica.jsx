import React, { useState } from 'react';

export const FormulaCuadratica = () => {
  const [a, setA] = useState('');c
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calculateQuadraticFormula = () => {
    const discriminant = (b * b) - (4 * a * c);
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`Root 1: ${root1}, Root 2: ${root2}`);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setResult(`Root: ${root}`);
    } else {
      setResult('No real roots');
    }
  }

  return (
    <div>cuadratica
      <h2> Formula Calculator</h2>
      <div>
        <label>
          Valor 'a':
          <input type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Valor 'b':
          <input type="number" value={b} onChange={(e) => setB(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Valor 'c':
          <input type="number" value={c} onChange={(e) => setC(parseFloat(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateQuadraticFormula}>Calcular</button>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default FormulaCuadratica;
