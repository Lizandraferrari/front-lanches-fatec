import { useState } from 'react';
import Seletor from '@/components/Seletor.jsx';
import PagamentoPix from '@/components/PagamentoPix.jsx';
import PagamentoCartao from '@/components/PagamentoCartao.jsx';

export default function FormaPagamento() {
  const [metodo, setMetodo] = useState('');
  const options = ['Pix', 'Cartão de crédito'];

  return (
    <div>
      <Seletor
        options={options}
        label="Forma de pagamento:"
        default="Selecione a forma de pagamento"
        onChange={(e) => setMetodo(e.target.value)}
      />

      {metodo === 'Pix' && <PagamentoPix />}
      {metodo === 'Cartão de crédito' && <PagamentoCartao />}
    </div>
  );
}
