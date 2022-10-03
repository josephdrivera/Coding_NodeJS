const add = (a, b) => {
    let sum = a + b;
    return sum;
}

const subtract = (a, b) => {
    let difference = a - b;
    return difference;
}

const multiply = (a, b) => {
    let product = a * b;
    return product;
}

const divide = (a, b) => {
    let quotient = a / b;
    return quotient;
}

const sqrt = (a) => {
    let squareRoot = Math.sqrt(a);
    return squareRoot;
}

const max = (a, b) => {
    let max = Math.max(a, b);
    return max;
}

module.exports = { add, subtract, multiply, divide, sqrt, max };


