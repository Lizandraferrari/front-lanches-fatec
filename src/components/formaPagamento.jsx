import { useState } from 'react';
import Seletor from '@/components/Seletor.jsx';
import QRCode from "react-qr-code";

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

        {metodo === 'Pix' && (
                <QRCode 
                    value="" 
                    aria-label="Código QR para pagamento"
                ></QRCode>
        )}

        {metodo === 'Cartão de crédito' && (
          <form>
            <label>
              Nome escrito no cartão:
              <input type="text" name="nome" />
            </label>            
            <label>
              Número do cartão:
              <input type="text" name="numero" />
            </label>
            <label>
              Validade:
              <input type="text" name="validade" />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" />
            </label>
            <button className='botao-vermelho'>Finalizar</button>
          </form>
        )}
      </div>
  );
}
