import { useEffect, useState } from "react";
import CardCarrinho from "../../cardCarrinho";

export default function Carrinho({ open, onClose }) {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    if (open) {
      const local = JSON.parse(sessionStorage.getItem("carrinho")) || [];
      setCarrinho(local)
    }
  }, [open])


  function removerItem(nome) {
    const atualizado = carrinho.filter((item) => item.name !== nome);
    setCarrinho(atualizado);
    sessionStorage.setItem("carrinho", JSON.stringify(atualizado));
  }

  let total = 0

  return (
    <>
      {open && <div className="overlay" onClick={onClose}></div>}

      <div className={`carrinho ${open ? "open" : ""}`}>
        {open && (
          <>
            <button 
              className="botao-fechar"   
              style={{ marginLeft: 'auto'}}
              onClick={onClose}>
            x
            </button>
            <h2 className="azul">Itens no carrinho:</h2>
            {carrinho.length > 0 ? (
              <>
                <div>
                  {carrinho.map((item, i) => {
                    total += item.price * item.quantity;
                    return (
                      <CardCarrinho
                        key={i}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        img={item.image}
                        onRemove={() => removerItem(item.name)}
                      ></CardCarrinho>
                    )
                  })}
                </div>
                <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
                <button className="botao-vermelho">Finalizar</button>
              </>
            ) : (
              <>
                <h3 className="vermelho">
                  Você ainda não tem produtos no carrinho.
                </h3>
                <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
