// let nba = {
//     luka: 77,
//     lebron: 23,
//     kobe: 24,
//     pg: 13,
//     paul: 3,
// }

// let total = 0;
// let numbers = Object.values(nba);
// for (let nums of numbers) {
//     total += nums;
// }
// console.log(total / numbers.length)



// let userInput = prompt("What would you like to do?");
// const todos = ['', 'Eat food', 'Play Basketball'];

// while (userInput !== "quit") {
//     if (userInput === "list") {
//         console.log("********")
//         for (let i = 1; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`)
//         }
//         console.log("********")
//     }
//     else if (userInput === "new") {
//         const newtoDo = prompt("What are you going to do?");
//         todos.push(newtoDo);
//         console.log(`${newtoDo} has been added to the list.`)
//     }
//     else if (userInput == "delete") {
//         const deletetodo = prompt("Enter an index to delete.");
//         const deleted = todos.splice(deletetodo, 1);
//         console.log(`${deleted[0]} has been deleted.`)
//     }
//     userInput = prompt("What would you like to do?");
// }
// alert("Okay quitting the app!!")


// for (let r = 1; r <= 5; r++) {
//     for (let col = 1; col <= r; col++) {

//         process.stdout.write(r.toString() + " ")
//     }
//     console.log();
// }

// console.log("******************");
// console.log("******************");


// for (r = 5; r > 0; r--) {
//     for (col = 1; col <= r; col++) {
//         process.stdout.write(col.toString()) + " ";
//     }
//     console.log()
// }

//

let num = [400, 3, 0, -7, -1, 1000]
n = num.length - 1
for (i = n; i >= 1; i--) {
    for (j = 0; j < i; j++) {
        if (num[j] > num[j + 1]) {
            temp = num[j];
            num[j] = num[j + 1]
            num[j + 1] = temp
        }
    }
}
console.log(num);





























