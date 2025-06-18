import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { finalizarPagamento } from "@/components/utils/finalizarPagamento.js";

export default function PagamentoPix() {
  const [tempoRestante, setTempoRestante] = useState(180);
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

  useEffect(() => {
    if (tempoRestante <= 0 || pagamentoConcluido) return;

    const timerId = setInterval(() => {
      setTempoRestante((t) => t - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [tempoRestante, pagamentoConcluido]);

  useEffect(() => {
    if (tempoRestante <= 0) {
      alert("Tempo do Pix expirado! Pagamento cancelado.");
    }
  }, [tempoRestante]);

  const formatarTempo = (segundos) => {
    const min = String(Math.floor(segundos / 60)).padStart(2, '0');
    const sec = String(segundos % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <>
      <p>Tempo restante para pagar: {formatarTempo(tempoRestante)}</p>

      <QRCode value="" />

      <button className="botao-vermelho"
        onClick={() => finalizarPagamento(setPagamentoConcluido)}
        disabled={pagamentoConcluido || tempoRestante <= 0}
      >
        Confirmar Pagamento
      </button>
    </>
  );
}
