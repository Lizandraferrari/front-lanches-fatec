import { finalizarPagamento } from "@/components/utils/finalizarPagamento.js";
import { useState } from 'react';

export default function PagamentoCartao() {
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

  return (
    <form method="post" onSubmit={() => finalizarPagamento(setPagamentoConcluido)}>
      <label>
        Nome escrito no cartão:
        <input
          type="text"
          name="nome"
          placeholder="Fulano de tal"
          required
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
          }}
        />
      </label>

      <label>
        Número do cartão:
        <input
          type="text"
          name="numero"
          placeholder="5555 6666 7777 8888"
          required
          maxLength={16}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
          }}
        />
      </label>

      <label>
        Validade (MM/AA):
        <input
          type="text"
          name="validade"
          required
          maxLength={5}
          placeholder="MM/AA"
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/\D/g, '')
              .replace(/^(\d{2})(\d{1,2})?/, (match, p1, p2) =>
                p2 ? `${p1}/${p2}` : p1
              );
          }}
        />
      </label>

      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          placeholder="123"
          required
          maxLength={3}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
          }}
        />
      </label>

      <button className="botao-vermelho" type="submit">Finalizar</button>
    </form>
  )
}
