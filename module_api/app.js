const calculator = require('./calculator');
const math  = require('./math');

const m = new math(5);
console.log(m.area());

// const calc = new calculator();
console.log(calculator.add(10,5));
console.log(calculator.subtract(10,5));
console.log(calculator.multiply(10,5));
console.log(calculator.divide(10,5));