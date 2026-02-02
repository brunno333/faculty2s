const imc = (peso, altura) => peso / (altura * altura);
const resultado = (resImc) => {
    if (resImc < 18.5) {
        return "Abaixo do peso";
    }
    else if (resImc < 25) {
        return "Peso ideal, parabéns";
    }
    else if (resImc < 30) {
        return "Levemente acima do peso";
    }
    else if (resImc < 35) {
        return "Obesidade grau 1";
    }
    else if (resImc < 40) {
        return "Obesidade grau 2 (severa)";
    }
    else {
        return "Obesidade 3 (mórbia)";
    }
}

const executar = () => {
    const peso = eval(document.getElementById("peso").value);
    const altura = eval(document.getElementById("altura").value);
    const resImc = imc(peso, altura);
    const v_sit = resultado(resImc);
    document.getElementById("res").innerHTML = `IMC:${resImc.toFixed(2)}, Situação física:${v_sit}`;
}