import Quantidade from "./quantidade";
import { useState } from "react";

export default function CardProduto(data) {

  const [quantity, setQuantity] = useState(0)

 const adicionaCarrinho = () => {
    if (quantity < 1) return

    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || []

    const produto = {
      name: data.name,
      price: data.price,
      image: data.image,
      quantity: quantity,
    }

    const itemAdicionado = carrinho.findIndex((item) => item.name === produto.name)

    if (itemAdicionado >= 0) {
      carrinho[itemAdicionado].quantity += quantity
    } else {
      carrinho.push(produto)
    }

    sessionStorage.setItem("carrinho", JSON.stringify(carrinho))
    setQuantity(0)
  }

  return (

    <article className="card-produto">
      <img src={data.image} alt={`Imagem do produto ${data.name}`} />
      <h3>{data.name}</h3>
      <p>R${data.price.toFixed(2).replace('.', ',')}</p>

      <Quantidade quantity={quantity} setQuantity={setQuantity} />

      <button aria-label={`Adicionar ${data.name} ao carrinho`} onClick={adicionaCarrinho}>Adicionar</button>
    </article>
    
  )
}
