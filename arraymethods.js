// binary search method

//array has to be sorted ; dive the length by 2 

let arr = [2, 5, 8, 23, 45, 71, 4, 9];


let findbinaryNum = (arr, num) => {
    while (start >= end) {
        let start = 0;
        let end = arr.length - 1;
        let mid = Math.floor((start + end / 2));
        if (mid < num) {
            mid++;
        } else if (mid > num) {
            mid--;
        } else if (mid == num) {
            return "you have found your code."
        }
    }
}





