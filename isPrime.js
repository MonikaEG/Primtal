var arg = Number(prompt('Type a number'));

let start = new Date();
let b = isPrime(arg);
let stop = new Date();
let elapsed = stop - start;

console.log(isPrime(arg));
document.write(elapsed);