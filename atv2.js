let alturaPedro = 1.5;
let crescimentoPedro = 0.02;
let alturaLucas = 1.1;
let crescimentoLucas = 0.03;

let anos = 0;

while (alturaPedro > alturaLucas) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anos++;
}

console.log(`Anos necessários para Lucas e Pedro terem a mesma altura: ${anos}`);

anos = 0;

while (alturaPedro < alturaLucas) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anos++;
}

console.log(`Anos necessários para Lucas ser maior que Pedro: ${anos}`);