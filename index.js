const num = 2;

const fst = num % 2 === 0 || num % 3 === 0 || num % 5 === 0;

const sec =
  (num % 2 === 0 && num % 3 === 0) ||
  (num % 3 === 0 && num % 5 === 0) ||
  (num % 2 === 0 && num % 5 === 0);

const thrd = num % 2 === 0 && num % 3 === 0 && num % 5 === 0;

console.log(Number(fst) + Number(sec) + Number(thrd));
