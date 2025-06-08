import Quantidade from "./quantidade";

export default function CardProduto(data) {
  return (
    <article className="card-produto">
      <img src={data.image} alt={`Imagem do produto ${data.name}`} />
      <h3>{data.name}</h3>
      <p>R${data.price.toFixed(2)}</p>

      <Quantidade />

      <button aria-label={`Adicionar ${data.name} ao carrinho`}>Adicionar</button>
    </article>
  )
}
