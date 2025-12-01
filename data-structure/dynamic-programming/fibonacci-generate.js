
const fibonacciNumber = 10;
let count = 0;
/**
 * Brute Force Approch
 */
const fibonacci = (n) => {
    // console.info(`Computing F('+str(${n})+')`);
    count++;
    if (n <= 1) return n;

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(fibonacciNumber))
console.log(`fibonacci calling times: ${count}`)


//  Memoization

/*
Memoization is a technique where results are stored to avoid doing the same computations many times.
When Memoization is used to improve recursive algorithms, it is called a "top-down" approach because of how it starts with the main problem and breaks it down into smaller subproblems.
Memoization is used in Dynamic Programming.
*/


let countMemo = 0;
/**
 * Computes the nth Fibonacci number using memoization.
 * @param {number} n The position of the Fibonacci number to compute.
 * @returns {number} The nth Fibonacci number.
 */
const fibonacciWithMemo = (n) => {
    const memo = []

    const innerFn = (n) => {
        if (typeof memo[n] !== 'undefined') {
            return memo[n];
        }
        countMemo++;
        if (n < 2) return n;

        memo[n] = innerFn(n-1) + innerFn(n-2);
        return memo[n];
    }
    return innerFn(n);
}

console.log(fibonacciWithMemo(fibonacciNumber))
console.log(`fibonacci With Memo calling times: ${countMemo}`)


// Tabulation

/*
Tabulation is a technique used to solve problems.

Tabulation uses a table where the results to the most basic subproblems are stored first. The table then gets filled with more and more subproblem results until we find the result to the complete problem that we are looking for.

The tabulation technique is said to solve problems "bottom-up" because of how it solves the most basic subproblems first.

Tabulation is a technique used in Dynamic Programming, which means that to use tabulation, the problem we are trying to solve must consist of overlapping subproblems.

*/

let countTabulation = 0;
/**
 * Returns the nth Fibonacci number computed using tabulation.
 * @param {number} n The position of the Fibonacci number to compute.
 * @returns {number} The nth Fibonacci number.
 */
const fibonacciTabulation = (n) => {
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
        countTabulation++;
    }
    return arr[arr.length-1];
}

console.log(fibonacciTabulation(fibonacciNumber))
console.log(`fibonacci With Tabulation calling times: ${countTabulation}`)



const fibonacciPrevVVal = (n) => {
    let SecLastVal = 0;
    let lastVal = 1;

    for (i = 2; i <= n; i++) {
        const temp = SecLastVal + lastVal;
        SecLastVal = lastVal;
        lastVal = temp;
    }
    return lastVal;
}
console.log(`fibonacci With Last 2 val:`, fibonacciPrevVVal(fibonacciNumber))
