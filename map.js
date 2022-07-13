// const arrStudents = ['Lan', 'Điệp', 'Ngọc', 'Ngạn'];
// for (let i = 0; i <= arrStudents.length - 1; i++) {
//   if (arrStudents[i] === 'Lan') {
//     arrStudents[i] = 'Phú';
//   }
// }
// console.log(arrStudents);
// const newArrStudents = arrStudents.map((student) => {
//   return student + '1';
// });

// newArrStudents[0] = 'Phú';
// console.log(arrStudents);
// console.log(newArrStudents);

// const number = [1, 2, 3, 4, 5];
// // Tạo ra 1 cái mảng mới, có kết quả là giá trị của các
// // phần tử trong mảng cũ x2

// const newNumber = number.map((number) => {
//   return number * 2;
// });
// console.log(newNumber);

// Câu 1: Cho array sau arr1 = [1,2,3,5].
// Hãy duplicate array cho bên trên bằng ít nhất 2 cách;
// trong đó có 1 cách dùng Spread Operator.

// const arr1 = [1, 2, 3, 5];
// const arr2 = [...arr1];
// // const arr3 = [...arr1, ...arr2];
// const newArr = arr1.map((number) => {
//   return number;
// });
// const arr4 = [];
// for (let number of arr1) {
//   arr4.push(number);
// }
// console.log(newArr);

// Câu 2: Cho arrX = [0,1,2,3,4,5,6,7,8].
// Hãy tạo ra arrSquare,
// chứa các giá trị của phần tử trong arrX
// đã được bình phương.
// Hãy tạo ra arrOdds chứa các phần tử
// là số lẻ nằm trong arrX.

const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrX);
const arrSquare = arrX.map((number) => {
  return number ** 2;
});
console.log(arrSquare);

// const arrOdds = arrX.map((number) => {
//   if (number % 2 === 1) {
//     return number;
//   }
// });
// chứa các phần tử có index là số chia hết cho 3 nằm trong arrX.
// const arrOdds = arrX.filter((number, Nghia) => {
//   return Nghia % 3 === 0;
// });
// console.log(arrOdds);
