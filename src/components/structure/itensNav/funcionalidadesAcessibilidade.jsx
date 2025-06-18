import { useEffect, useState } from 'react';

export default function FuncionalidadesAcessibilidade() {
  const [tamanhoFonte, setTamanhoFonte] = useState(100);

  useEffect(() => {
    const corpo = document.body;

    const pretoBranco = () => corpo.classList.toggle("preto-branco");
    const altoContraste = () => corpo.classList.toggle("alto-contraste");

    const aumentarTexto = () => {
      const novo = Math.min(tamanhoFonte + 10, 200);
      setTamanhoFonte(novo);
      corpo.style.fontSize = `${novo}%`;
    };

    const diminuirTexto = () => {
      const novo = Math.max(tamanhoFonte - 10, 50);
      setTamanhoFonte(novo);
      corpo.style.fontSize = `${novo}%`;
    };

    const leituraPorVoz = () => {
      const texto = window.getSelection().toString() || corpo.innerText;
      const fala = new SpeechSynthesisUtterance(texto);
      window.speechSynthesis.speak(fala);
    };

    const ativarVLibras = () => {
      if (!document.getElementById('vlibras-plugin')) {
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.id = 'vlibras-plugin';
        document.body.appendChild(script);
        script.onload = () => new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    document.getElementById('preto-e-branco')?.addEventListener('click', pretoBranco);
    document.getElementById('alto-contraste')?.addEventListener('click', altoContraste);
    document.getElementById('aumentar-texto')?.addEventListener('click', aumentarTexto);
    document.getElementById('diminuir-texto')?.addEventListener('click', diminuirTexto);
    document.getElementById('leitura-por-voz')?.addEventListener('click', leituraPorVoz);
    document.getElementById('tradutor-de-libras')?.addEventListener('click', ativarVLibras);

    return () => {
      document.getElementById('preto-e-branco')?.removeEventListener('click', pretoBranco);
      document.getElementById('alto-contraste')?.removeEventListener('click', altoContraste);
      document.getElementById('aumentar-texto')?.removeEventListener('click', aumentarTexto);
      document.getElementById('diminuir-texto')?.removeEventListener('click', diminuirTexto);
      document.getElementById('leitura-por-voz')?.removeEventListener('click', leituraPorVoz);
      document.getElementById('tradutor-de-libras')?.removeEventListener('click', ativarVLibras);
    }
  }, [tamanhoFonte])

  return null
}
