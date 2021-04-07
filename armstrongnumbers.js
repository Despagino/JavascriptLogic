let armstrong = 370;
let sum = 0;
let quotient = armstrong;


while (quotient > 0) {
    let remainder = quotient % 10;
    quotient = Math.floor(quotient / 10)
    sum = sum + (remainder * remainder * remainder);

}

if (sum == armstrong) {
    console.log(armstrong + " is an armstrong number");
}
else {
    console.log(armstrong + " is not an armstrong number.")
}
