// Divide and Conquer (Merge):

const mergeArray = (leftArr, rightArr) => {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            arr.push(leftArr[i]);
            i++;
        } else {
            arr.push(rightArr[j]);
            j++;
        }
    }

    while (i < leftArr.length) {
        arr.push(leftArr[i]);
        i++;
    }
    while (j < rightArr.length) {
        arr.push(rightArr[j]);
        j++;
    }
    return arr;
}


const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);;
    return mergeArray(mergeSort(leftArr), mergeSort(rightArr));
}


const arr = [5, 8, 20, 1, 99, 67];

console.log(mergeSort(arr));

