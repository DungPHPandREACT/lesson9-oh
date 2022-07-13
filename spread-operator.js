const number = [1, 2, 3, 4, 5];
const number2 = [...number,6,7];

number2[2] = 'ba';
console.log(number2); //[]
console.log(number); //
