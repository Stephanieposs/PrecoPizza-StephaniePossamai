


let out = document.getElementById("idOut");

let btInserir = document.getElementById("IdbtInserir");
let btRelatorio = document.getElementById("idBtRelatorio");
let contadorVezes=0;
let pizzas = [];

btInserir.addEventListener("click", pegarDados)

function pegarDados(){
    let nome = document.getElementById("idNome");
    let tamanho = document.getElementById("idTamanho");
    let preco = document.getElementById("idPreco");
    contadorVezes++

    // ver como o professor fez para puxar o nome direto sem o document.getElementById
    var pizza = {
        nomeP: nome,
        tamanhoP: tamanho,
        precoP: preco
    }
    pizzas.push(pizza);
    console.table(pizza)
    console.table(pizzas)
}

function calcular() {
    
}