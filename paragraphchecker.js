
let welcome = prompt("PARAGRAPH CHECKER FOR STUDENTS. If your paragraph includes 300 or more characters and has '?', it's not valid. If your paragraph passes, all '.' will turn to copyright symbols and will capitalize all the characters.");

while (welcome.length < 300 && !welcome.includes("?")) {
    welcome = prompt(welcome.replaceAll(".", "©").toUpperCase().trim())
}
let fail = prompt("You have to fix your paragraph.")




