import CardProduto from "@/components/cardProduto";
import Header from "@/components/header";

export default function Categoria({produtos , ...header}) {

  return (
    <>
        <Header 
            {...header}
        ></Header>

        <div style={{ textAlign: "right" , margin:"2em"}}>
          <label htmlFor="ordenar" >
            Ordenar por:
         </label>
          <select id="ordenar">
            <option>Preço</option>
          </select>
        </div>

        <div className="conteiner-produtos">
          {produtos.map((item, i) => (
            <CardProduto key={i} {...item} />
          ))}
        </div>
    </>
  )
}
