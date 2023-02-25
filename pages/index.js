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

function Lista({ elementos, eliminarElemento }) {
  const listaElementos = elementos.map((elemento, index) => (
    <li key={index}>
      {elemento}
      <button onClick={() => eliminarElemento(index)}>Eliminar</button>
    </li>
  ));

  return <ul>{listaElementos}</ul>;
}

export default function Home() {
  const [elementos, setElementos] = useState([]);

  const agregarElemento = (elemento) => {
    setElementos([...elementos, elemento]);
  };

  const eliminarElemento = (index) => {
    const nuevosElementos = [...elementos];
    nuevosElementos.splice(index, 1);
    setElementos(nuevosElementos);
  };

  return (
    <div>
      <h1>Agregar y Eliminar ElementosS</h1>
      <Formulario agregarElemento={agregarElemento} />
      <Lista elementos={elementos} eliminarElemento={eliminarElemento} />
    </div>
  );
}