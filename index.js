var peca1 = [
    cod = parseInt(lines.shift()),
    quantidade = parseInt(lines.shift()),
    valorUnidade = Number(lines.shift()),

]

var peca2 = [
    cod = parseInt(lines.shift()),
    quantidade = parseInt(lines.shift()),
    valorUnidade = Number(lines.shift())
]

function calcular1(peca1) {
    var total = quantidade * valorUnidade;
    return total;
}
function calcular2(peca2) {
    var total = quantidade * valorUnidade;
    return total;
}

var compraTotal = calcular1() + calcular2();

console.log(`VALOR A PAGAR: R$ ${compraTotal.toFixed(2)}`);
