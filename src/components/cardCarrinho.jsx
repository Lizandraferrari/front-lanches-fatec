import Quantidade from "./quantidade";

export default function CardCarrinho({ name, price, quantity, img, onRemove }) {
  const total = price * quantity;

  return (
    <div className="card-carrinho">
      <img src={img} alt={`Foto de ${name}`} />
      <div className="flex-linha">
        <strong>{name}</strong>

        <Quantidade quantity={quantity}/>

        <p>Total: R$ {total.toFixed(2).replace('.', ',')}</p>
      </div>

      <button
        className="botao-fechar"
        onClick={onRemove}
        aria-label={`Remover ${name} do carrinho`}
      >
        ×
      </button>
    </div>
  );
}
