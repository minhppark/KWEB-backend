const factorial = number => (number === 0 ? 1 : number * factorial(number - 1));

const permutation = (n, r) => factorial(n) / factorial(n - r);

const combination = (n, r) => permutation(n, r) / factorial(r);

const multiPermutation = (n, r) => n ** r;

const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
    combination,
    permutation,
    multiCombination,
    multiPermutation,
};