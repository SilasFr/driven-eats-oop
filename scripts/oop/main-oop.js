import Pedido from './pedido.js';
import Produto from './produto.js';
import Container from './container.js';

export const meuPedido = new Pedido({
  pratoSelecionado: undefined,
  bebidaSelecionada: undefined,
  sobremesaSelecionada: undefined,
});

const btnConfirmar = document.querySelector('.confirmar');
const btnCancelar = document.querySelector('.cancelar');
export const btnPedir = document.querySelector('.fazer-pedido');

btnConfirmar.addEventListener('click', () => {
  meuPedido.enviarZap();
});

btnCancelar.addEventListener('click', () => {
  meuPedido.cancelar();
});

btnPedir.addEventListener('click', () => {
  meuPedido.confirmar();
});

const pratos = [
  new Produto({
    nome: 'Estrombelete de Frango',
    imagem: 'img/frango_yin_yang.png',
    descricao: 'Um pouco de batata, um pouco de salada',
    preco: 14.9,
    tipo: 'prato',
  }),

  new Produto({
    nome: 'Asa de Boi',
    imagem: 'img/frango_yin_yang.png',
    descricao: 'Com molho shoyu',
    preco: 14.9,
    tipo: 'prato',
  }),

  new Produto({
    nome: 'Carne de Monstro',
    imagem: 'img/frango_yin_yang.png',
    descricao: 'Com batata assada e farofa',
    preco: 14.9,
    tipo: 'prato',
  }),
];

const bebidas = [
  new Produto({
    nome: 'Coquinha gelada',
    imagem: 'img/coquinha_gelada.png',
    descricao: 'Lata 350ml',
    preco: 4.9,
    tipo: 'bebida',
  }),
  new Produto({
    nome: 'Caldo de Cana',
    imagem: 'img/coquinha_gelada.png',
    descricao: 'Copo 600ml',
    preco: 4.9,
    tipo: 'bebida',
  }),
  new Produto({
    nome: 'Corote Gelado',
    imagem: 'img/coquinha_gelada.png',
    descricao: 'Garrafa 400ml',
    preco: 4.9,
    tipo: 'bebida',
  }),
];

const sobremesas = [
  new Produto({
    nome: 'Pudim',
    imagem: 'img/pudim.png',
    descricao: 'Gosto de doce de leite',
    preco: 7.9,
    tipo: 'sobremesa',
  }),
  new Produto({
    nome: 'Flam',
    imagem: 'img/pudim.png',
    descricao: 'Gosto de chocolate',
    preco: 7.9,
    tipo: 'sobremesa',
  }),
  new Produto({
    nome: 'Brigadeiro',
    imagem: 'img/pudim.png',
    descricao: '3 unidades',
    preco: 7.9,
    tipo: 'sobremesa',
  }),
];

const pratosContainer = new Container('prato');
pratosContainer.renderizar(pratos);

const bebidasContainer = new Container('bebida');
bebidasContainer.renderizar(bebidas);

const sobremsaContainer = new Container('sobremesa');
sobremsaContainer.renderizar(sobremesas);
