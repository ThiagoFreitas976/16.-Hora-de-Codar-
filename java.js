var nome_do_carro = "Fusca";
window.alert(nome_do_carro);

var person = prompt("Por favor, insira seu nome:");
window.alert("Olá, " + person);

var nome = prompt("Por favor, insira seu nome:");
var idade = prompt("Por favor, insira sua idade:");

window.alert("Olá, " + nome + ", sua idade é: " + idade);

var basere = prompt("Por favor, informe o valor da base do retângulo!");
var alturare = prompt("Por favor, informe o valor da altura do retângulo!");

window.alert("A área do retângulo vale: " + basere*alturare);

var ladoqu = prompt("Por favor, informe o valor do lado do quadrado!");

window.alert("A área do quadrado vale: " + ladoqu*ladoqu);

var diagonalmaior = prompt("Por favor, informe o valor da diagonal maior do losango!");
var diagonalmenor = prompt("Por favor, informe o valor da diagonal menor do losango!");

window.alert("A área do losango vale: " + (diagonalmaior*diagonalmenor)/2);

var basemaior = prompt("Por favor, informe o valor da base maior do trapézio!");
var basemenor = prompt("Por favor, informe o valor da base menor do trapézio!");
var altura = prompt("Por favor, informe o valor da altura do trapézio!");

let basemaiortra = parseInt(basemaior);
let basemenortra = parseInt(basemenor);
let alturatra = parseInt(altura);

var resultadotra = ((basemaiortra+basemenortra)*2)/2

window.alert("A área do trapézio vale: " + resultadotra);

var basepara = prompt("Por favor, informe o valor da base do paralelogramo!");
var alturapara = prompt("Por favor, informe o valor da altura do paralelogramo!");

window.alert("A área do trapézio vale: " + (basepara*alturapara));


var basetri = prompt("Por favor, informe o valor da base do triângulo!");
var alturatri = prompt("Por favor, informe o valor da altura do triângulo!");

window.alert("A área do losango vale: " + (basetri*alturatri)/2);

var raio = prompt("Por favor, informe o valor do raio!");

window.alert("A área do losango vale aproximadamente: " + (Math.PI*(raio*raio)));
