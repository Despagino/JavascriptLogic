let sentence = "The cat roared at the lion"
let modifySentence = sentence.toLowerCase()
let vowels = 0
for (let i = 0; i < modifySentence.length; i++) {
    if (modifySentence[i] === "a" || modifySentence[i] === "e" || modifySentence[i] === "i" || modifySentence[i] === "o" || modifySentence[i] === "u") {
        vowels++
        console.log(modifySentence[i])
    }
}


let sentence = "The cat roared at the lion";
let allvowels = "aeiou";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence.indexOf(allvowels[i] == -1)) {
        console.log(count)
    }
}
