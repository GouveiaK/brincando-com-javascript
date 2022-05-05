function data() {
    document.getElementById('date').innerHTML = Date();
}
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const igual = document.getElementById('igual');
function somar() {
        const resultado = document.getElementById('resultado');
        var nu1 = parseInt(number1.value);
        var nu2 = parseInt(number2.value);
        var resultadofinal = nu1 + nu2;
        resultado.innerHTML = resultadofinal;
}
igual.addEventListener('click', somar);
const numero = document.getElementById('num-tabuada');
function tabuada(e) {
    if (e.key === 'Enter') {
            var num = parseInt(numero.value);
        document.getElementById('p1').innerHTML = num + ' * 1 = ' +(num * 1);
            document.getElementById('p2').innerHTML = num + ' * 2 = ' +(num * 2);
            document.getElementById('p3').innerHTML = num + ' * 3 = ' +(num * 3);
            document.getElementById('p4').innerHTML = num + ' * 4 = ' +(num * 4);
            document.getElementById('p5').innerHTML = num + ' * 5 = ' +(num * 5);
            document.getElementById('p6').innerHTML = num + ' * 6 = ' +(num * 6);
            document.getElementById('p7').innerHTML = num + ' * 7 = ' +(num * 7);
            document.getElementById('p8').innerHTML = num + ' * 8 = ' +(num * 8);
            document.getElementById('p9').innerHTML = num + ' * 9 = ' +(num * 9);
            document.getElementById('p10').innerHTML = num + ' * 10 = ' +(num * 10);
    }
}
numero.addEventListener('keypress', tabuada);

const resetar = document.getElementById('reset');
function reset() {
    document.getElementById('date').innerHTML = '';
    document.getElementById('resultado').innerHTML = 'resultado';
    document.getElementById('p1').innerHTML = '';
    document.getElementById('p2').innerHTML = '';
    document.getElementById('p3').innerHTML = '';
    document.getElementById('p4').innerHTML = '';
    document.getElementById('p5').innerHTML = '';
    document.getElementById('p6').innerHTML = '';
    document.getElementById('p7').innerHTML = '';
    document.getElementById('p8').innerHTML = '';
    document.getElementById('p9').innerHTML = '';
    document.getElementById('p10').innerHTML = '';

}
resetar.addEventListener('click', reset);