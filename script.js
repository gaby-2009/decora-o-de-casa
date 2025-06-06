// Função para atualizar o carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function adicionarProduto(nome, preco) {
  const idx = carrinho.findIndex(p => p.nome === nome);
  if (idx >= 0) {
    carrinho[idx].quantidade++;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }

  atualizarContador();
  salvarCarrinho(); // Salva no localStorage
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarContador();
  salvarCarrinho(); // Salva no localStorage
}

function carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  if (carrinhoSalvo) {
    return JSON.parse(carrinhoSalvo); // Converte de volta para o formato de objeto
  }
  return []; // Caso não haja carrinho salvo, retorna um carrinho vazio
}

const carrinho = carregarCarrinho(); // Carrega o carrinho quando a página é carregada

// Atualizar o contador de itens no carrinho assim que a página carregar
document.addEventListener('DOMContentLoaded', atualizarContador);

// Quando a página carrega, atualiza o modal do carrinho se houver itens no carrinho
document.addEventListener('DOMContentLoaded', () => {
  atualizarModal();
});

// Carregar carrinho ao carregar a página
function carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Atualizar modal com os itens
function atualizarModal() {
  // Lógica de atualização do modal
  // ...
  salvarCarrinho(); // Salva o carrinho a cada atualização
}

// Adicionar item ao carrinho
function adicionarProduto(nome, preco) {
  // Lógica de adicionar produto
  // ...
  salvarCarrinho(); // Salva no localStorage
}

// Remover item do carrinho
function removerItem(index) {
  // Lógica de remover item
  // ...
  salvarCarrinho(); // Salva no localStorage
}

// Carregar carrinho quando a página for carregada
const carrinho = carregarCarrinho();
document.addEventListener('DOMContentLoaded', () => {
  atualizarContador();
  atualizarModal();  // Atualiza o modal assim que a página carregar
});
