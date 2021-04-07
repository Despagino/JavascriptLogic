
let previous = 0;
let current = 1;
let answer;

console.log(previous)
console.log(current)

for (let i = 1; i <= 10; i++) {
    answer = previous + current
    console.log(answer)
    previous = current;
    current = answer
}
