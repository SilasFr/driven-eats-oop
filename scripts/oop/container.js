export default class Container {
  constructor(tipo) {
    this.tipo = tipo;
  }

  renderizar(produtos) {
    const containerDeProdutos = document.querySelector(`.opcoes.${this.tipo}`);
    produtos.forEach((produto) =>
      containerDeProdutos.appendChild(produto.GerarElemento())
    );
  }
}
