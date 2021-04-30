const btnGenerate$ = document.querySelectorAll(".btnGenerate");
var pos0$ = document.getElementById("posZero");
var pos1$ = document.getElementById("posOne");
var pos2$ = document.getElementById("posTwo");
var pos3$ = document.getElementById("posThree");
var pos4$ = document.getElementById("posFour");
var pos5$ = document.getElementById("posFive");


var data = [];

//Quando o botão for ativado
btnGenerate$.forEach(function (btnGenerate$) {
    btnGenerate$.addEventListener("click", function (event) {
        randomNumbers();
        console.log(data)
    })
})

function calculator(seed) {
    var x = seed;
    var a = 5;
    var b = 1
    var val;

    var m = 61

    //Deletar o vetor
    for (var i = 0; i <= 5; i++) {
        data.pop(i);
    }

    //Gerar os pseudo-numeros aleatorios
    for (var i = 0; i < 6; i++) {
        val = ((a * x) + b) % m
        if (val == 0) {
            val = 1
        }
        x = val

        data.push(val);

    }

    //Ordenar o vetor em ordem crescente
    data.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
    })
    return (data)
}

//Começar o programa
function randomNumbers() {

    calculator(parseInt(Math.random() * 100))

    pos0$.innerHTML = data[0];
    pos1$.innerHTML = data[1];
    pos2$.innerHTML = data[2];
    pos3$.innerHTML = data[3];
    pos4$.innerHTML = data[4];
    pos5$.innerHTML = data[5];
}