const arr = [0, 1, 2, 0, 4, 6, 0];

let cnt = 0;

for (let index = 0; index < arr.length; index++) {
  arr[index] === 0 ? cnt++ : '';
}
console.log(cnt);
