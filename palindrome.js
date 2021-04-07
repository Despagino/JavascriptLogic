let palindrome = "racecar";
let palindrome2 = palindrome.length - 1;
let backwards = ""

for (palindrome2; palindrome2 >= 0; palindrome2--) {
    backwards += palindrome.charAt(palindrome2)
}
if (palindrome === backwards) {
    console.log("This is valid")
} else {
    console.log("this is not valid")
}