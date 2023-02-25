

function Lista({ elementos, eliminarElemento }) {
    const listaElementos = elementos.map((elemento, index) => (
      <li key={index}>
        {elemento}
        <button onClick={() => eliminarElemento(index)}>Eliminar</button>
      </li>
    ));
  
    return <ul>{listaElementos}</ul>;
  }
  
  export default Lista;