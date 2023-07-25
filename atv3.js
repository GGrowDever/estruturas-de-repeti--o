const multiplicando = Number(prompt('Qual é o multiplicando? '));
const iterações = Number(prompt('Quantas iterações? '));

for (let i = 1; i <= iterações; i++) {
	document.write(`${i} * ${multiplicando} = ${i * multiplicando}`);
}
