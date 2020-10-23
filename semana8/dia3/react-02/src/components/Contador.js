import React, {useState} from "react";

const Contador = () => {
  const [c, actualizarC] = useState(0);
  console.log("Ejucutando el componente Contador");
  // const arreglo = useState(0);
  // const c = arreglo[0];
  // const actualizarC = arreglo[1];

  const restar = () => {
    actualizarC(c - 1);
  };

  const sumar = () => {
    actualizarC(c + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          restar();
        }}
      >
        -1
      </button>
      {c}
      <button
        onClick={() => {
          sumar();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Contador;
