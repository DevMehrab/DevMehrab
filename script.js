let arr = [
  [2, 1, 4],
  [5, 9, 2],
  [3, 1, 4],
];
let count = 0
let firstD = 0;
let secondD = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  firstD += arr[i][i];
}
for (let i = arr.length - 1; i >= 0; i--) {
    secondD += arr[i][count];
    count++
}
let defference = function(f , s) {
    if (f>s) {
        return f-s
    } else {
       return s-f
    }
}
console.log("the answer is", defference(firstD,secondD));


