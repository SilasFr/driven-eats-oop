import { meuPedido } from './main-oop.js';

export default class Produto {
  constructor({ id, nome, imagem, descricao, preco, tipo }) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.tipo = tipo;
  }

  GerarElemento() {
    const view = document.createElement('div');
    view.classList.add('opcao');
    view.addEventListener('click', () => {
      this.selecionar(view);
    });
    view.innerHTML = `
            <img src="${this.imagem}" />
            <div class="titulo">${this.nome}</div>
            <div class="descricao">${this.descricao}</div>
            <div class="fundo">
                <div class="preco">R$ ${this.preco.toFixed(2)}</div>
                <div class="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        `;

    return view;
  }

  selecionar(elemento) {
    const selecionado = document.querySelector(`.${this.tipo} .selecionado`);
    if (selecionado !== null) {
      selecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    meuPedido.atualizar(this);
    meuPedido.verificar();
  }
}
