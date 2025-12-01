function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Fetching from cache');
            return cache[key];
        } else {
            console.log('Calculating result');
            const result = func.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}

//v2
// function memoize(func) {
//     const cache = {};
//     return function (...args) {
//         const key = JSON.stringify(args);
//         if (!cache[key]) cache[key] = func.apply(this, args);
//         return cache[key];
//     }
// }
function add(a, b) {
    return a + b;
}
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(2, 3)); // Output: 5 (from cache)