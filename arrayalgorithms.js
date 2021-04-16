// function linearSearch(array, findNumber) {
//     let isFound = false;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === findNumber) {
//             return findNumber + " is found in the array index " + i
//         }
//     }
//     if (!isFound) {
//         return findNumber + " is not found!!"
//     }
// }

// Binary Search Method

// let arr = [2, 5, 8, 23, 45, 71, 4, 9];



// function findbinaryNum(arr, num) {

//     let start = 0;
//     let end = arr.length - 1;
//     for (let i = start; i < end; i++) {
//         let mid = Math.floor((start + end / 2));
//         if (num === arr[mid]) {
//             return num + " has been found at index " + mid
//         } else if (arr[mid] > num) {
//             end = mid - 1;
//         } else if (arr[mid] < num) {
//             start = mid + 1;
//         } else {
//             return "Number not found in array."
//         }
//     }
// }

let binarySearch = (arr, num) => {
    var start = 0;
    var end = arr.length - 1
    while (start <= end) {

        var middle = Math.floor((start + end) / 2)

        if (arr[middle] === num) {

            return num + " has been found at index " + middle

        } if (arr[middle] > num) {

            end = middle - 1;

        } else if (arr[middle] < num) {
            start = middle + 1
        }
        else {
            return num + " not found"
        }
    }
}