// Ex7.8: Cho 1 mảng học sinh:
// arrStudents = [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
// + Thêm ‘An’ vào sau ‘Ngạn’ -> Hiển thị [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘An’, ‘Trinh’];
// const arrStudents = ['Lan', 'Điệp', 'Ngọc', 'Ngạn'];
// arrStudents.splice(4, 0, 'An');
// + Xóa ‘Ngọc’ -> hiển thị [‘Lan’, ‘Điệp’,,’Ngạn’, ‘Trinh’];
// arrStudents.splice(2, 1);
// + Tìm kiếm và hiển thị vị trí của người tên là Trinh  trong mảng
// let isName = true;
// for (let i = 0; i <= arrStudents.length - 1; i++) {
//   if (arrStudents[i] === 'Trinh') {
//     console.log(i);
//     isName = false;
//   }
// }
// if (isName === true) {
//   console.log('Tên đó không tồn tại trong mảng');
// }
// + Cập nhật ‘Lan’ thành ‘Phú’ -> Hiển thị [‘Phú, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
// Lưu ý: các yêu cầu trên là riêng biệt
// for (let i = 0; i <= arrStudents.length - 1; i++) {
//   if (arrStudents[i] === 'Lan') {
//     arrStudents[i] = 'Phú';
//   }
// }
// console.log(arrStudents);

// Ex7.6: Viết hàm với 2 tham số đầu vào đều là 2 mảng,
// thực hiện so sánh tổng 2 mảng này,
// hiển thị kết quả của việc so sánh

// const number1 = [1, 3, 5, 7, 9];
// const number2 = [2, 4, 6, 8, 10];
// Cách 1:
// let sum1 = 0;
// let sum2 = 0;
// for (let number of number1) {
//   sum1 += number; //sum = sum + number
// }

// for (let number of number2) {
//   sum2 += number; //sum = sum + number
// }
// if (sum1 > sum2) {
//   console.log('Mảng 1 lớn hơn mảng 2');
// } else if (sum1 < sum2) {
//   console.log('Mảng 2 lớn hơn mảng 1');
// } else {
//   console.log('Hai mảng có giá trị tổng bằng nhau');
// }

// Cách 2: viết hàm
function calSum(arrNumber) {
  let sum = 0;
  for (let number of arrNumber) {
    sum += number;
  }
  return sum;
}

const number1 = [1, 3, 5, 7, 9];
const number2 = [2, 4, 6, 8, 10];
if (calSum(number1) > calSum(number2)) {
  console.log('Tổng giá trị của mảng 1 lớn hơn tổng giá trị mảng 2');
} else if (calSum(number1) < calSum(number2)) {
  console.log('Tổng giá trị của mảng 1 nhỏ hơn tổng giá trị mảng 2');
} else {
  console.log(console.log('Tổng giá trị của mảng 1 bằng tổng giá trị mảng 2'));
}
