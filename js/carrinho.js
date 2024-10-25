let itensCard = [];

function atualizarContadorCarrinho() {
  const contagem = itensCard.reduce((total, item) => total + item.quantidade, 0);
  const elementoContagemCarrinho = document.getElementById("contador-carrinho");
  if (elementoContagemCarrinho) {
    elementoContagemCarrinho.innerText = contagem.toString();
  }
  localStorage.setItem('contagemCarrinho', contagem.toString()); // Armazena a contagem no localStorage

  const elementoContagemNav = document.querySelector(".navbar .contagem-carrinho small");
  if (elementoContagemNav) {
    elementoContagemNav.innerText = contagem.toString();
  }
}

function adicionarCarrinho(idProduto) {
  const produto = produtos.find(item => item.produtoID === idProduto);
  if (produto) {
    const itemExistente = itensCard.find(item => item.produtoID === idProduto);
    if (itemExistente) {
      alert('Este produto já foi adicionado ao carrinho.');
    } else {
      itensCard.push({ ...produto, quantidade: 1 });
      salvarItensDoCarrinho();
      atualizarContadorCarrinho(); // Chamar a função atualizarContadorCarrinho() após adicionar um item ao carrinho
      alert('Produto adicionado ao carrinho com sucesso.');
    }
  }
}

function removerItemDoCarrinho(idProduto) {
  itensCard = itensCard.filter(item => item.produtoID !== idProduto);
  salvarItensDoCarrinho();
  mostrarCarrinho();
}

function atualizarQuantidade(idProduto, quantidade) {
  const item = itensCard.find(item => item.produtoID === idProduto);
  if (item) {
    item.quantidade = quantidade;
    salvarItensDoCarrinho();
    mostrarCarrinho();
  }
}

function calcularTotal() {
  let total = 0;
  itensCard.forEach(item => {
    total += item.preco * item.quantidade;
  });
  return total;
}

function salvarItensDoCarrinho() {
  localStorage.setItem('itensCard', JSON.stringify(itensCard));
}

function carregarItensDoCarrinho() {
  const itensArmazenados = localStorage.getItem('itensCard');
  if (itensArmazenados) {
    itensCard = JSON.parse(itensArmazenados);
  }
}

function mostrarCarrinho() {
  carregarItensDoCarrinho();
  const elementoItensCarrinho = document.getElementById('carrinho-items');
  const elementoTotalCarrinho = document.getElementById('carrinho-total');
  elementoItensCarrinho.innerHTML = '';
  elementoTotalCarrinho.innerText = '';

  if (itensCard.length === 0) {
    elementoItensCarrinho.innerHTML = '<tr><td colspan="5">Carrinho vazio</td></tr>';
  } else {
    itensCard.forEach(item => {
      const total = item.preco * item.quantidade;
      elementoItensCarrinho.innerHTML += `
        <tr>
          <td>${item.nome}</td>
          <td>R$ ${item.preco.toFixed(2)}</td>
          <td><input type="number" min="1" value="${item.quantidade}" onchange="atualizarQuantidade(${item.produtoID}, this.value)"></td>
          <td>R$ ${total.toFixed(2)}</td>
          <td><button class="btn btn-danger" onclick="removerItemDoCarrinho(${item.produtoID})">Excluir</button></td>
        </tr>
      `;
    });
    const total = calcularTotal();
    elementoTotalCarrinho.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  const elementoCarrinho = document.getElementById('carrinho');
  elementoCarrinho.style.display = 'block';
}

function pagar() {
  // Implemente a lógica de pagamento aqui
  alert('Pagamento realizado com sucesso!');
  itensCard = [];
  salvarItensDoCarrinho();
  mostrarCarrinho();
}