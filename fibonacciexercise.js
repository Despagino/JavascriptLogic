



// for (let i = 1; i <= 10; i++) {
//     answer = previous + current
//     console.log(answer)
//     previous = current;
//     current = answer
// }

fibonacci = (previous, current) => {
    for (let i = 1; i <= 10; i++) {
        answer = previous + current
        console.log(answer)
        previous = current;
        current = answer
    }
}

console.log(fibonacci(0, 1))