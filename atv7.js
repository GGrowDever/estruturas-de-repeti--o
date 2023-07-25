let numeros = [];
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 10; i++) {
	numeros.push(Number(prompt('Digite um número: ')));
}

let media = numeros.reduce((a, b) => a + b) / numeros.length;

for (let numero of numeros) {
	if (numero > 0) {
		positivos++;
	} else if (numero < 0) {
		negativos++;
	}
}

let percentualPositivos = (positivos / numeros.length) * 100;
let percentualNegativos = (negativos / numeros.length) * 100;

document.write(`Média aritmética: ${media}` + '<br>');
document.write(`Quantidade de números positivos: ${positivos}` + '<br>');
document.write(`Quantidade de números negativos: ${negativos}` + '<br>');
document.write(`Percentual de números positivos: ${percentualPositivos}%` + '<br>');
document.write(`Percentual de números negativos: ${percentualNegativos}%`);
