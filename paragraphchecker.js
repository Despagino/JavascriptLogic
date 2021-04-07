// STRINGSPROJECT
// PARAGRAPH CHECKER - THIS CAN BE USED FOR STUDENTS WHO HAVE A REQUIREMENT FOR ESSAYS


let welcome = prompt("PARAGRAPH CHECKER FOR STUDENTS. If your paragraph includes 300 or more characters and has '?', it's not valid. If your paragraph passes, all '.' will turn to copyright symbols and will capitalize all the characters.");

while (welcome.length < 300 && !welcome.includes("?")) {
    welcome = prompt(welcome.replaceAll(".", "©").toUpperCase().trim())
}
let fail = prompt("You have to fix your paragraph.")



//The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.


// There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.