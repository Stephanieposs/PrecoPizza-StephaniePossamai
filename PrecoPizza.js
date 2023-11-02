


var out = document.getElementById("idOut");

var btInserir = document.getElementById("IdbtInserir");
var btRelatorio = document.getElementById("idBtRelatorio");
var contadorVezes=0;
var pizzas = [];

btInserir.addEventListener("click", pegarDados);
btRelatorio.addEventListener("click", calcular);

function pegarDados(){
    contadorVezes++
    let formulario = document.getElementById("idForm")
    
    var pizza = {
        nome: formulario.nmNome.value,
        tamanho: formulario.nmTamanho.value,
        preco: formulario.nmPreco.value,
        custoBeneficio: 0
    }
    pizzas.push(pizza);
    

}

function calcular() {
    // transformar diametro em area 
    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index].tamanho = (pizzas[index].tamanho)/2 * (pizzas[index].tamanho)/2 * 3.14; 
    }
    console.table(pizzas)
    

    // calculando o custo beneficio
    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index].custoBeneficio = (pizzas[index].preco) / (pizzas[index].tamanho); 
    }
    console.log("custo beneficio")
    console.table(pizzas)
    

    //ordenar do melhor custo beneficio pro pior
    function compare(a, b){
            if (a.custoBeneficio > b.custoBeneficio) {
                return 1
            }
            if (a.custoBeneficio < b.custoBeneficio) {
                return -1
            }
            return 0 
    }
        console.table(+pizzas); 
    pizzas.sort(compare)
    console.table(pizzas); 



}