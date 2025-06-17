
export default function Quantidade({quantity , setQuantity}) {

  return (
    <div className="flex-coluna-center">
      <label htmlFor="campo-quantidade">Quantidade: </label>
      <div >
        <button
          onClick={() => setQuantity((num) => Math.max(num - 1, 0))}
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
          onChange={(num) => setQuantity(Number(num.target.value))}
          className="controlador"
        />
        <button
          onClick={() => setQuantity((num) => num + 1)}
          className="controlador"
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>
    </div>
  )
}
