let fullName = "Giño Taßis";
let hobby = " cooks bomb food"


// fullName.indexOf() -- what is the location of the character I am looking for
// fullName.lastIndexOf() -- in case there is more than 1 character, it will go from the end to front
// fullname.charAt() -- what is the character of the number being indicated in the variable

// using chatAt()

let single = fullName.charAt(2)
for (let i = 0; i < 5; i++) {
    console.log(single)
}

//------- ------- ------- ------- ------- ------- ------- ------- ------- ------- -------

//using concat

let aboutMe = fullName.concat(hobby)
console.log(aboutMe)

lastIndexOf()


console.log(fullName.lastIndexOf("l"))

uppercase

console.log(hobby.toUpperCase())

SLICE

//replace method or replaceAll


let str = "The dog ate the wasp";

let newstr = str.replace("dog", "frog")
console.log(newstr)






//padStart() and padEnd()

const str = "Area";
const padend = str.padEnd(7, " 51")
const padstrt = padend.padStart(19, "Don't go to ")

includes , endsWith , starsWith


if (padstrt.includes("51")) {
    console.log(true)
} else {
    console.log(false)
}








// PARAGRAPH CHECKER - THIS CAN BE USED FOR STUDENTS WHO HAVE A REQUIREMENT FOR ESSAYS

let welcome = prompt("PARAGRAPH CHECKER FOR STUDENTS. If your paragraph includes 300 or more characters and has '?', it's not valid. If your paragraph passes, all '.' will turn to copyright symbols and will capitalize all the characters.");

while (welcome.length < 300 && !welcome.includes("?")) {
    welcome = prompt(welcome.replaceAll(".", "©").toUpperCase().trim())
}
let fail = prompt("You have to fix your paragraph.")










// paragraph1= The day had begun on a bright note.The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth.There was no way to anticipate what was about to happen.It was a worst -case scenario and there was no way out of it.

