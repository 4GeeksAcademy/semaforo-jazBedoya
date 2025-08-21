import React, { useState } from "react";
import "./style.css";

function Semaforo() {
  const [color, setColor] = useState("red");
  const [colores, setColores] = useState(["red", "yellow", "green"]);

  // cambiar al siguiente color
  const cambiarColor = () => {
    const indice = colores.indexOf(color);
    const siguiente = (indice + 1) % colores.length;
    setColor(colores[siguiente]);
  };

  // agregar púrpura
  const agregarColor = () => {
    if (!colores.includes("purple")) {
      setColores([...colores, "purple"]);
    }
  };

    return (
        <div className="text-center">
            {/* caja del semáforo */}
            <div className="semaforo">
                {colores.map((c) => (
                    <div
                        key={c}
                        className={`luz ${c} ${color === c ? "activo" : ""}`}
                onClick={() => setColor(c)}
                     />
        ))}
            </div>

            {/* botones */}
            <button className="btn btn-success m-2" onClick={cambiarColor}>
                Cambiar color
            </button>
            <button className="btn btn-primary m-2" onClick={agregarColor}>
                Agregar púrpura
            </button>
        </div>
    );
}

export default Semaforo;