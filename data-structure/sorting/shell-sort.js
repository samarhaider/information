/*
Shell Sort is an in-place comparison sort that can be implemented in JavaScript.
It is an optimization of Insertion Sort, allowing for the exchange of elements that are far apart, which is particularly beneficial when a small value is located far to the right and needs to be moved significantly to the left.
*/

const shellSort = (arr) => {
    let gap = Math.floor(arr.length / 2);
    while (gap >= 1) {
        for (let i = 0; i + gap < arr.length; i++) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
            }
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

const a = [5, 8, 9, 3, 4];
console.log(shellSort(a));

