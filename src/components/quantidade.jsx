import { useState } from "react";

export default function Quantidade() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex-coluna">
      <label htmlFor="campo-quantidade">Quantidade: </label>
      <div >
        <button
          onClick={() => setQuantity((q) => Math.max(q - 1, 0))}
          className="controlador"
          aria-label="Diminuir quantidade"
        >
          -
        </button>
        <input
          type="number"
          min="0"
          max="99"
          step="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="controlador"
        />
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="controlador"
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>
    </div>
  )
}
