import { useState } from 'react';

function Formulario({ agregarElemento }) {
  const [valorInput, setValorInput] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
    agregarElemento(valorInput);
    setValorInput('');
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;