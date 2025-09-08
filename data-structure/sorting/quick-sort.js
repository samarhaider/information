//  Quick sort

// Quick sort is a highly efficient, recursive, "divide and conquer" sorting algorithm.Its implementation in JavaScript typically involves the following steps:
// Define the quickSort function: This function takes an array as input.
// Base Case: If the array has zero or one element, it is already sorted, so the function returns the array.This prevents infinite recursion.
// Choose a Pivot: Select an element from the array to be the "pivot." Common choices include the first, last, or middle element.For simplicity, the last element is often chosen.
// Partition the Array: Create two empty arrays, left and right.Iterate through the input array(excluding the pivot).
// If an element is less than the pivot, add it to the left array. 
// If an element is greater than or equal to the pivot, add it to the right array.
// Recursive Calls: Recursively call quickSort on the left array and the right array.
// Combine Results: Concatenate the sorted left array, the pivot, and the sorted right array to form the final sorted array.


const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1]; //arr[0]
    const leftArr = [];
    const rightArr = [];
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [5, 8, 20, 1, 99, 67];

console.log(quickSort(arr));

