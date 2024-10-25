  // Seus dados de produtos
  const produtos = [
    {
      "produtoID": 0,
      "nome": "Labirinto Vivo",
      "preco": 24500,
      "modelo": "Luvas Esportivas (★)",
      "categoria": "luvas",
      "descricao": "Testada em Campo",
      "estoque": 5,
      "imagem": "luvas-punhal.png"
    },
    {
      "produtoID": 1,
      "nome": "Mármore Caído",
      "preco": 150.00,
      "modelo": "Bayoneta (★)",
      "categoria": "facas",
      "descricao": "Nova de Fabrica",
      "estoque": 9,
      "imagem": "imagem-2.png"
    },
    {
      "produtoID": 2,
      "nome": "Sabedoria",
      "preco": 15230.00,
      "modelo": "Butterfly (★)",
      "categoria": "facas",
      "descricao": "Nova de Fabrica",
      "estoque": 13,
      "imagem": "but.png"
    },
    {
      "produtoID": 3,
      "nome": "Linda Dourada",
      "preco": 400.00,
      "modelo": "AK-47",
      "categoria": "rifles",
      "descricao": "Testada em Campo",
      "estoque": 32,
      "imagem": "rifle-ak-arabesca-dourada.png"
    },
    {
      "produtoID": 4,
      "nome": "Blaze",
      "preco": 250.00,
      "modelo": "Desert Eagle",
      "categoria": "pistolas",
      "descricao": "Nova de Fabrica",
      "estoque": 12,
      "imagem": "blaze.png"
    },
    {
      "produtoID": 5,
      "nome": "Olho de Órus",
      "preco": 3613,
      "modelo": "M4A4",
      "categoria": "rifles",
      "descricao": "Veterana de Guerra",
      "estoque": 23,
      "imagem": "horus.png"
    },
    {
      "produtoID": 6,
      "nome": "Doppler Gamma",
      "preco": 84000,
      "modelo": "M9 Bayoneta (★)",
      "categoria": "facas",
      "descricao": "Nova de Fabrica",
      "estoque": 2,
      "imagem": "facas-doppler-gama.png"
    },
    {
      "produtoID": 7,
      "nome": "Grafite Negro",
      "preco": 150.00,
      "modelo": "AWP",
      "categoria": "rifle",
      "descricao": "Nova de Fabrica",
      "estoque": 53,
      "imagem": "rifle-awp-grafite.png"
    },
    {
      "produtoID": 8,
      "nome": "Doppler Gamma",
      "preco": 15230.00,
      "modelo": "Glock-18",
      "categoria": "pistolas",
      "descricao": "Nova de Fabrica",
      "estoque": 33,
      "imagem": "pistola-glock-esmeralda.png"
    },
    {
      "produtoID": 9,
      "nome": "Deu Branco",
      "preco": 250.00,
      "modelo": "USP-S",
      "categoria": "pistolas",
      "descricao": "Nova de Fabrica",
      "estoque": 2,
      "imagem": "pistola-usp-branco.png"
    },
    {
      "produtoID": 10,
      "nome": "Morte Sangue",
      "preco": 250.00,
      "modelo": "USP-S",
      "categoria": "pistolas",
      "descricao": "Nova de Fabrica",
      "estoque": 2,
      "imagem": "pistola-usp-kill-confirmed.png"
    },
    {
      "produtoID": 11,
      "nome": "Aço Azul",
      "preco": 27700.00,
      "modelo": "AK-47",
      "categoria": "rifles",
      "descricao": "Testada em Campo",
      "estoque": 2,
      "imagem": "ak-47-aquecimento.png"
    }
  ];
    


  const divProdutos = document.getElementById("produtos");

  const criarCartao = (produto) => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-3", "mb-3");
    card.innerHTML = `
      <div class="card text-center bg-light ">
        <img src="img/produtos/${produto.imagem}" class="card-img-top img-zoom">
        <div class="card-header fs-5 fw-bold">R$ ${produto.preco.toFixed(2)}</div>
        <div class="card-body">
          <p class="card-title">${produto.modelo}</p>
          <h5 class="card-title text-danger">${produto.nome}</h5>
          <p class="card-text">${produto.descricao}</p>
        </div>
        <div class="card-footer">
        <button class="btn btn-primary" onclick="adicionarCarrinho(${produto.produtoID})">Adicionar ao Carrinho</button>
        <small class="text-success">Estoque: ${produto.estoque}</small>
        </div>
      </div>
    `;
    divProdutos.appendChild(card);
  
    const img = card.querySelector("img");
    img.addEventListener("click", () => {
      window.location.href = "Produtos.html";
    });
  };
  
  const atualizarCartoes = (categoria) => {
    divProdutos.innerHTML = "";
    produtos.forEach((produto) => {
      if (categoria === "" || produto.categoria === categoria) {
        criarCartao(produto);
      }
    });
  };
  
  const categoriaSelect = document.getElementById("categoria-select");
  categoriaSelect.addEventListener("change", () => {
    atualizarCartoes(categoriaSelect.value);
  });
  
  produtos.forEach(criarCartao);