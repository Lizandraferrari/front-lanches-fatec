export function finalizarPagamento(setPagamentoConcluido) {
  alert("Pagamento realizado com sucesso!");
  sessionStorage.removeItem("carrinho");
  setPagamentoConcluido(true);
}