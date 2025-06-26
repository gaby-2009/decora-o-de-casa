function atualizarCarrinho() {
  const itens = Object.values(carrinho);
  if (itens.length === 0) {
    carrinhoSection.hidden = true;
    return;
  }
  carrinhoSection.hidden = false;
  itensCarrinhoList.innerHTML = '';

  let total = 0;

  itens.forEach(({ produto, quantidade }) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${produto.nome}</span>
      <div>
        <button class="btn-diminuir" aria-label="Diminuir quantidade de ${produto.nome}">-</button>
        <span class="quantidade">${quantidade}</span>
        <button class="btn-aumentar" aria-label="Aumentar quantidade de ${produto.nome}">+</button>
        <button class="btn-remover" aria-label="Remover ${produto.nome} do carrinho">🗑️</button>
      </div>
      <span>${formatPrice(produto.preco * quantidade)}</span>
    `;

    itensCarrinhoList.appendChild(li);

    const btnDiminuir = li.querySelector('.btn-diminuir');
    const btnAumentar = li.querySelector('.btn-aumentar');
    const btnRemover = li.querySelector('.btn-remover');

    btnDiminuir.addEventListener('click', () => {
      if (carrinho[produto.nome].quantidade > 1) {
        carrinho[produto.nome].quantidade--;
      } else {
        delete carrinho[produto.nome];
      }
      atualizarCarrinho();
    });

    btnAumentar.addEventListener('click', () => {
      carrinho[produto.nome].quantidade++;
      atualizarCarrinho();
    });

    btnRemover.addEventListener('click', () => {
      delete carrinho[produto.nome];
      atualizarCarrinho();
    });

    total += produto.preco * quantidade;
  });

  carrinhoTotal.textContent = `Total: ${formatPrice(total)}`;
}

