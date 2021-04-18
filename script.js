const btnGenerate$ = document.querySelectorAll(".btnGenerate");

btnGenerate$.forEach(function (btnGenerate$) {
    btnGenerate$.addEventListener("click", function (event) {
        randomNumbers();
    })
})

function randomNumbers() {
    document.getElementById("posZero").innerHTML = parseInt(Math.random() * 100)
    document.getElementById("posOne").innerHTML = parseInt(Math.random() * 100)
    document.getElementById("posTwo").innerHTML = parseInt(Math.random() * 100)
    document.getElementById("posThree").innerHTML = parseInt(Math.random() * 100)
    document.getElementById("posFour").innerHTML = parseInt(Math.random() * 100)
    document.getElementById("posFive").innerHTML = parseInt(Math.random() * 100)
}