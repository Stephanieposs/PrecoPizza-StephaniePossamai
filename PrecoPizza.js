


var out = document.getElementById("idOut");

var btInserir = document.getElementById("IdbtInserir");
var btRelatorio = document.getElementById("idBtRelatorio");
var pizzas = [];

btInserir.addEventListener("click", pegarDados);
btRelatorio.addEventListener("click", imprimir);

function pegarDados() {
    //document.getElementById("idOut").value = " ";
    let formulario = document.getElementById("idForm")

    for (let index = 0; index < pizzas.length; index++) {
        if (formulario.nmTamanho.value = pizzas[index].tamanho) {
            // colocar um tempo de espera
            document.getElementById("idOut").value = "Esse tamanho ja existe, tente novamente"
            
            pegarDados();
        }
    }
    var pizza = {
        nome: formulario.nmNome.value,
        tamanho: formulario.nmTamanho.value,
        preco: formulario.nmPreco.value,
        custoBeneficio: 0,
        diferenca: 0
    }
    pizzas.push(pizza);


}

function calcular() {
    // transformar diametro em area 
    for (let index = 0; index < pizzas.length; index++) {
        let calcTamanho = ((pizzas[index].tamanho) / 2 * (pizzas[index].tamanho) / 2) * 3.14;
        pizzas[index].tamanho = calcTamanho.toFixed(0);
        calcTamanho = 0;
    }


    // calculando o custo beneficio
    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index].custoBeneficio = ((pizzas[index].preco) / (pizzas[index].tamanho)).toFixed(2);
    }


    //ordenar do melhor custo beneficio pro pior
    function compare(a, b) {
        if (a.custoBeneficio > b.custoBeneficio) {
            return 1
        }
        if (a.custoBeneficio < b.custoBeneficio) {
            return -1
        }
        return 0
    }
    pizzas.sort(compare)

    calculoDiferenca()
}

function calculoDiferenca() {
    // calcular a diferença em % 
    pizzas[0].diferenca = "Melhor CB";

    for (let index = 1; index < pizzas.length; index++) {
        let diferenca = (((pizzas[index].custoBeneficio) / (pizzas[0].custoBeneficio) - 1) * 100);
        pizzas[index].diferenca = "+" + diferenca.toFixed(0) + "%";
        diferenca = 0;
    }
    console.table(pizzas)

}

function imprimir() {
    calcular();

    var table = document.getElementById("idTable")
    var thead = document.getElementById("idThead")
    var tbody = document.getElementById("idTbody")

    var tr = document.createElement('tr');
    tr.innerHTML =
        "<th>Nome</th>" +
        "<th>Tam.(cm)</th>" +
        "<th>Preço</th>" +
        "<th>R$ p/cm2</th>" +
        "<th>Diferença%</th>";

    thead.appendChild(tr);


    pizzas.forEach(function (pizza) {
        var tr = document.createElement('tr');
        tr.innerHTML =
            "<td>" + pizza.nome + "</td>" +
            "<td>" + pizza.tamanho + "</td>" +
            "<td>" + pizza.preco + "</td>" +
            "<td> R$" + pizza.custoBeneficio + "</td>" +
            "<td>" + pizza.diferenca + "</td>";

        tbody.appendChild(tr);

    });


}
