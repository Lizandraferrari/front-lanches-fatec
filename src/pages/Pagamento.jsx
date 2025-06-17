import { useEffect, useState } from "react"; 
import Header from "@/components/header";
import CardCarrinho from "@/components/cardCarrinho"; 

export default function Pagamento() {
  let total = 0
  const header = {
    title: "Pagamento",
    subtitle: "Escolha o método de pagamento e finalize seu pedido.",
  };

  document.title = header.title;

  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const dadosSalvos = sessionStorage.getItem("carrinho");
    if (dadosSalvos) {
      setCarrinho(JSON.parse(dadosSalvos));
    }
  }, []);

  function removerItem(nome) {
    const atualizado = carrinho.filter((item) => item.name !== nome);
    setCarrinho(atualizado);
    sessionStorage.setItem("carrinho", JSON.stringify(atualizado));
  }

  return (
    <>
      <Header title={header.title} subtitle={header.subtitle} />

      {carrinho.length > 0 ? (
        <div className="flex-coluna">
          <section style={{ width: '70%' }}>
            <h3 style={{fontWeight:'400'}}>Detalhes do Pedido:</h3>
            <div className="conteiner-produtos scroll" style={{ maxHeight: '50vh' }}>
              {carrinho.map((item, i) => (
                total += (item.price * item.quantity),
                <CardCarrinho
                  key={i}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  img={item.image}
                  onRemove={() => removerItem(item.name)}
                />
              ))}
            </div>
            <h2 className="vermelho">Total: R$ {total.toFixed(2).replace('.', ',')}</h2>
          </section>

          <section style={{ width: '30%' }}>
            {/* seção de pagamento */}
          </section>
        </div>
      ) : (
        <h2 style={{marginTop:'5em' , textDecoration:'underline'}}>Carrinho vazio!</h2>
      )}
    </>
  );
}
