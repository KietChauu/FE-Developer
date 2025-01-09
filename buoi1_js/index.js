// 1. Biến (variable)
/* 
- Tên biến phải có ý nghĩa
- Mọi tên đều tuân theo cấu trúc camel case ==> họ tên ==> hoTen
- Đặt tên biến không chứa khoảng cách ==> họ tên ==> ho ten ==> fail
- Không đặt tên biến chứa từ khóa đặt biệt 
*/
let hoTenKiet = "Kiệt";
console.log(hoTenKiet);

let heSoLuongNhanVien = 2;

// những hằng số lưu trữ gtrị đơn lẻ sẽ viết hoa toàn bộ chữ cái 
const HE_SO_LUONG = 10;


// 2. Kiểu dữ liệu (data type)
/* Các kiểu dữ liệu cơ bản
1. string (chuỗi)
2. number (số)
3. boolean (true/false)
4. oject
5. array
6. symbol
*/
// không bắt đầu bằng số 0 trong number
let diemToan = 1;


// 3. Toán tử (operator)
// + - * / %
let diemTrungBinh = (diemToan + 8 + 9) / 3;
console.log(diemTrungBinh);

let ketQua = 12 % 5; // chia lấy dư để kiểm tra số chẵn lẻ
console.log(ketQua);

/* Bài toán
đỏ đen cam vàng  ==> 1 2 3 4
Bình Khải Kiệt Phúc Lan Vy Hạ Vinh Sang Cường 
1 % 4  ==> 1 đỏ 
number % 4  ==> 2 đen
number % 4  ==> 3 cam
number % 4  ==> 0 vàng
*/

// 4. Toán tử gán 
let soTienCuaKiet = 10;
// soTienCuaKiet = soTienCuaKiet + 5;
soTienCuaKiet += 5; // -= *= /= %=
console.log(soTienCuaKiet);

// 5. Phép tăng và phép giảm 
/*
++tên_biến ==> tăng 1 đơn vị rồi mới sử dụng giá trị mới
tên_biến++ ==> sử dụng giá trị cũ rồi mới tăng 1 đơn vị 
*/
let diemCuaBinh = 6;
diemCuaBinh++;
console.log(diemCuaBinh)

let ketQua2 = ++diemCuaBinh + soTienCuaKiet + diemTrungBinh++ + diemCuaBinh; 
console.log(ketQua2);

let diemLy = 5;
let diemHoa = 10;
let diemSinh = 9;

let ketQua3 = ++diemLy - 3 + diemHoa-- + diemSinh * 2 - diemLy; 
console.log(ketQua3);

// Thay đổi nội dung trong HTML
document.title = "Buổi 1 JS";
let theH1 = document.getElementById("demo");
theH1.innerHTML = "Hello World";
let noiDungTheH1 = document.getElementById("demo").innerHTML;
console.log(noiDungTheH1);
theH1.style.backgroundColor = "red";