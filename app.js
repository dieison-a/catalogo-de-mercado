const catalogo = [{
  nome: "Pera madura",
  setor: "Frutas",
  preco: 4.2
},
{
  nome: "Uvas roxas",
  setor: "Frutas",
  preco: 8.6
},
{
  nome: "Suco de maçã",
  setor: "Bebidas",
  preco: 7.5
},
{
  nome: "Água com gás",
  setor: "Bebidas",
  preco: 3.4
},
{
  nome: "Sabonete vegetal",
  setor: "Cuidados",
  preco: 6.8
},
];
const cesta = [];
const areaProdutos = document.querySelector("#produtos");
function dinheiro(valor) {
  return valor.toLocaleString("pt-BR",
  {
    style: "currency",
    currency: "BRL"
  });
}
function atualizarCesta() {
  const total = cesta.reduce((soma,
  item) => soma + item.preco,
  0);
  const nomes = cesta.map((item) => item.nome).join(", ");
  document.querySelector("#cesta").textContent = cesta.length ? `${cesta.length} itens · ${nomes} · ${dinheiro(total)}` : "Nenhum item selecionado.";
}
function desenharCatalogo() {
  const setor = document.querySelector("#setor").value;
  areaProdutos.replaceChildren();
  catalogo .filter((produto) => setor === "Todos" || produto.setor === setor) .forEach((produto) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao";
    const etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = produto.setor;
    const nome = document.createElement("h3");
    nome.textContent = produto.nome;
    const preco = document.createElement("p");
    preco.textContent = dinheiro(produto.preco);
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Incluir na cesta";
    botao.addEventListener("click",
    () => {
      cesta.push(produto);
      atualizarCesta();
    });
    cartao.append(etiqueta,
    nome,
    preco,
    botao);
    areaProdutos.append(cartao);
  });
}
document.querySelector("#setor").addEventListener("change",
desenharCatalogo);
desenharCatalogo();
atualizarCesta();



