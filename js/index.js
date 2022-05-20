const vitrine = document.getElementById("vitrine")
const carrinho = document.getElementById("add")

function addProduto(produto) {

    let div1 = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    let button = document.createElement("button");

    div1.className = "product-box";
    h2.className = "product-title";
    span.className = "price";
    button.className = "btn-buy";

    img.src = produto.imagem;
    img.alt = produto.h2;
    img.className = "product-img";

    h2.innerText = produto.nome;
    span.innerText = `R$ ${produto.preco}`;
    button.innerText = "Comprar"

    div1.appendChild(img);
    div1.appendChild(h2);
    div1.appendChild(span);
    div1.appendChild(button);
    vitrine.appendChild(div1);

}

function updateScreen(produto) {

    for (let i = 0; i < produto.length; i++) {
        addProduto(produto[i])
    }
}
updateScreen(produto);

function adicionarProdutos() {

    const comprar = document.getElementsByClassName("btn-buy")

    for (let i = 0; i < comprar.length; i++) {

        comprar[i].addEventListener("click", function (event) {

            let divc1 = document.createElement("div");
            let img1 = document.createElement("img");
            let divc2 = document.createElement("div");
            let divc3 = document.createElement("div");
            let divc4 = document.createElement("div");
            let button1 = document.createElement("button");

            divc1.className = "carrinho-box";
            img1.className = "carrinho-img";
            divc2.className = "detalhe-box";
            divc3.className = "carrinho-produc-title";
            divc4.className = "carrinho-price"
            button1.className = "Carrinho-remove";

            img1.src = produto[i].imagem;
            img1.alt = produto[i].h2;

            divc3.innerText = produto[i].nome;
            divc4.innerText = `R$ ${produto[i].preco}`;

            somarTotal(produto[i].preco)
            quantidadeCarrAdd()

            button1.innerText = "Remover"

            button1.addEventListener("click", function (event) {
                let button = event.target
                subTotal(produto[i].preco)
                quantidadeCarrRev()
                button.parentElement.remove()
            })

            carrinho.prepend(divc1);
            divc1.appendChild(img1);
            divc1.appendChild(divc2);
            divc2.appendChild(divc3);
            divc2.appendChild(divc4);
            divc1.appendChild(button1)
        })
    }
}
adicionarProdutos()

let resultadoTotal = 0

function somarTotal(valor) {
    const total = document.querySelector(".total-price")
    resultadoTotal = resultadoTotal + valor
    return total.innerText = `R$ ${resultadoTotal}`
}

function subTotal(valor) {
    const total = document.querySelector(".total-price")
    resultadoTotal = resultadoTotal - valor
    return total.innerText = `R$ ${resultadoTotal}`
}

let quant = 0

function quantidadeCarrAdd() {
    const quantidade = document.querySelector(".quanty");
    quant = quant + 1
    return quantidade.innerText = quant
}
function quantidadeCarrRev() {
    const quantidade = document.querySelector(".quanty");
    quant = quant - 1
    return quantidade.innerText = quant

}






