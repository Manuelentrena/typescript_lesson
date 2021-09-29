function sumar(m: number, n: number): number {
  let suma = m + n;
  console.log(`${m} + ${n} = ${suma}`);
  return suma;
}
let restar: (m: number, n: number) => number;

restar = function sumar(m, n) {
  let resta = m - n;
  console.log(`${m} - ${n} = ${resta}`);
  return resta;
};

let multiplicar: (m: number, n: number, callback: (r: number) => void) => void;
multiplicar = (m, n, callback) => callback(m * n);

multiplicar(4, 5, function (result) {
  console.log(`Resultado: ${result}`);
});

restar(5, 4);
