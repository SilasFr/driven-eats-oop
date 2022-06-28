import { btnPedir } from './main-oop.js';

export default class Pedido {
  constructor({ pratoSelecionado, bebidaSelecionada, sobremesaSelecionada }) {
    this.pratoSelecionado = pratoSelecionado;
    this.bebidaSelecionada = bebidaSelecionada;
    this.sobremesaSelecionada = sobremesaSelecionada;
  }

  verificar() {
    if (
      this.pratoSelecionado &&
      this.bebidaSelecionada &&
      this.sobremesaSelecionada
    ) {
      console.log(this);
      this.total =
        this.pratoSelecionado.preco +
        this.bebidaSelecionada.preco +
        this.sobremesaSelecionada.preco;
      btnPedir.classList.add('ativo');
      btnPedir.disabled = false;
      btnPedir.innerHTML = 'Fazer pedido';
    }
  }

  atualizar(produto) {
    if (produto.tipo === 'prato') {
      this.pratoSelecionado = produto;
    } else if (produto.tipo === 'bebida') {
      this.bebidaSelecionada = produto;
    } else if (produto.tipo === 'sobremesa') {
      this.sobremesaSelecionada = produto;
    }
  }

  confirmar() {
    const modal = document.querySelector('.overlay');
    modal.classList.remove('escondido');

    const precoPrato = new Preco('prato', this.pratoSelecionado);
    precoPrato.display();

    const precoBebida = new Preco('bebida', this.bebidaSelecionada);
    precoBebida.display();

    const precoSobremesa = new Preco('sobremesa', this.sobremesaSelecionada);
    precoSobremesa.display();

    const precoTotal = new Preco('total', this.total);
    precoTotal.display();
  }

  cancelar() {
    const modal = document.querySelector('.overlay');
    modal.classList.add('escondido');
  }

  enviarZap() {
    const telefoneRestaurante = 553299999999;
    const encodedText = encodeURIComponent(
      `Olá, gostaria de fazer o pedido: \n- Prato: ${
        this.pratoSelecionado.nome
      } \n- Bebida: ${this.bebidaSelecionada.nome} \n- Sobremesa: ${
        this.sobremesaSelecionada.nome
      } \nTotal: R$ ${this.total.toFixed(2)}`
    );

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);
  }
}

class Preco {
  constructor(tipo, produto) {
    this.tipo = tipo;
    this.produto = produto;
  }
  display() {
    if (this.tipo === 'total') {
      return (document.querySelector(
        '.confirmar-pedido .total .preco'
      ).innerHTML = this.produto.toFixed(2));
    }
    document.querySelector(`.confirmar-pedido .${this.tipo} .nome`).innerHTML =
      this.produto.nome;
    document.querySelector(`.confirmar-pedido .${this.tipo} .preco`).innerHTML =
      this.produto.preco.toFixed(2);
  }
}
