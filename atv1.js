let menorAltura = Number.MAX_VALUE;
let maiorAltura = Number.MIN_VALUE;

for (let i = 0; i < 15; i++) {
	let altura = prompt(`Qual é a sua altura? ${i+1} `);
	if (altura < menorAltura) {
		menorAltura = altura;
	}
	if (altura > maiorAltura) {
		maiorAltura = altura;
	}
}

document.write(`A menor altura do grupo é ${menorAltura}<br>`);
document.write(`A maior altura do grupo é ${maiorAltura}`);
