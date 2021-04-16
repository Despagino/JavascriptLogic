let rowInput = 4;
let colInput = 6;
let value = 1;

for (row = 1; row <= rowInput; row++) {
    for (col = 1; col <= colInput; col++) {
        temp = row + "," + col + " | "
        process.stdout.write(temp.toString())
    }
    console.log();
}

             