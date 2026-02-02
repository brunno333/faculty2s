
function somar(a, b) { return a + b };
function subtrair(a, b) { return a - b };
function dividir(a, b) {
    if (b == 0) alert("Impossível dividir por 0");
    { return a / b };
};
function multiplicar(a, b) { return a * b };
function exponencial(a, b) {
    return Math.pow(a, b);
};

const executar = () => {
    const a = Number(document.getElementById("vA").value);
    const b = Number(document.getElementById("vB").value);
    let oper = Number(document.getElementById("oper").selectedIndex);
    let result = (oper == 0) ? somar(a, b) : (oper == 1) ? subtrair(a, b) : (oper == 2) ? dividir(a, b) :
        (oper == 3) ? multiplicar(a, b) : exponencial(a, b);
    document.getElementById("res").innerHTML = `the result is: ${result}`;
};

