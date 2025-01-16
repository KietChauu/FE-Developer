/* 
- Cấu trúc điều kiện
- Kiểu dữ liệu boolean: true | false
- Toán tử logic (==, ===, !=, !==)
- Toán tử so sánh
*/

// 1. Toán tử logic
let diemToan = 9;
let diemVan = 9; // "9"
console.log(diemToan == diemVan); 

// Toán tử so sánh kiểu dữ liệu và giá trị
// Phải có cùng kiểu dữ liệu và giá trị 
console.log(diemToan === diemVan); // false

// BE id ==> number (id === idHTML*1)

let diemTong1 = (45 * 12) / 21 + 5;
let diemTong2 = ((45 * 12) / 21 + 5).toString; // ép number sang kiểu chuỗi
// let diemTong2 = 11 * 30 -5 / 9;
console.log(diemTong1 != diemTong2); 
console.log(diemTong1 !== diemTong2); 
// khác về giá trị hoặc khác về dữ liệu

// 2. Ép chuỗi
// Chuyển chuỗi thành số
// "9" ==> ? * 1 || Number()
console.log(typeof Number("9"));
console.log(typeof ("9" * 1));
console.log(+"9");
console.log(parseInt("9"));

// Chuyển số thành chuỗi
// console.log(9.toString);
console.log(9 + "");
console.log(String(9));

// 3. Toán tử (!, &&, ||)
console.log(!true); // false
console.log(!9); // false
console.log(!""); // true

// 4. So sánh A && so sánh B
let ketQua = diemToan === diemVan && hello(); // false
// console.log(ketQua);
function hello() {
  console.log("Tôi là hello");
}

let ketQua2 = diemToan * 2 === diemVan * 14 || diemToan > 50;
console.log(ketQua2);

// 5. Cấu trúc điều kiện (if, if...else, else if)
let diemRandom = 45 / 15;
if (diemRandom > 3) {
  // Khi toán tử so sánh trả về true
  console.log("Số lớn hơn 3");
} else if (diemRandom == 3) {
  console.log("Số bằng 3");
} else {
  console.log("Số nhỏ hơn 3");
}


//------------------------------------------------------------------//
// Sự kiện click
document.getElementById("btnEye").onclick = function () {
  let domInput = document.querySelector("input[name='matKhau']");
  let typeInput = domInput.type;
  if (typeInput == "password") {
    domInput.type = "text"; // thay đổi thành text
  } else {
    console.log("First");
    domInput.type = "password"; // thay đổi lại thành mật khầu
  }
};
//------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------//
/* Thực hiện tính toán 
Chức vụ giamDoc = 3 || truongPhong = 2 || nhanVien = 1
số giờ làm ít hơn 50 giờ trừ đi 3tr tiền lương 
số giờ làm nghỉ hơn nhìu hơn 20 giờ trừ đi 2tr tiền lương 
ngoài ra nếu tổng số tiền kiếm được lớn hơn 20tr thì sẽ trừ đi 10% tiền cho công ty 
tính toán xong sẽ hiển thị kết quả cho người dùng theo cấu trúc
Nguyễn Văn A tháng này kiếm được ... vnđ
*/

document.getElementById("btnTinhToan").onclick = function () {
  // thu thập dữ liệu từ các field
  let hoTen = document.getElementById("hoTen").value;
  let soGioLam = document.getElementById("soGioLam").value * 1;
  let chucVu = document.getElementById("chucVu").value;
  let soGioNghi = document.getElementById("soGioNghi").value * 1;

  // tính toán chức vụ
  // Toán tử 3 ngôi: toán tử so sánh ? hành động 1 : hành động 2
  // let heSoLuong = chucVu == "giamDoc" ? 3 : chucVu == "truongPhong" ? 2 : 1;

  // cấu trúc if kiểm tra được các điều kiện nhiều hơn
  // let heSoLuong = 1;
  // if (chucVu == "giamDoc") {
  //     heSoLuong = 3;
  // } else if (chucVu == "truongPhong") {
  //     heSoLuong = 2;
  // } else {
  //     heSoLuong = 1;
  // }

  // Cấu trúc switch case
  // chỉ kiểm tra được các value cho sẵn 
  switch (chucVu) {
    case "giamDoc":
      heSoLuong = 3;
      break;
    case "truongPhong":
      heSoLuong = 2;
      break;
    case "nhanVien":
      heSoLuong = 1;
      break;
    default:
      heSoLuong = 1;
      break;
  }

  // trừ theo quy định
  let tongTienLuong = 200000 * soGioLam * heSoLuong;
  // nếu số giờ làm ít hơn 50 trừ 3tr
  if (soGioLam < 50) {
    tongTienLuong -= 3000000;
  }
  // nếu số giờ nghỉ nhiều hơn 20 trừ 2tr
  if (soGioNghi > 20) {
    tongTienLuong -= 2000000;
  }
  // nếu thu nhập hơn 20tr thì trừ 10%
  if (tongTienLuong > 20000000) {
    // tongTienLuong = tongTienLuong * 0.9; // cách 1
    // tongTienLuong = tongTienLuong * 1 - tongTienLuong * 0.1; // cách 2
    tongTienLuong *= 0.9; // cách 3
  }

  // in ra màn hình
  document.getElementById("ketQua").innerHTML = `${hoTen} tháng này kiếm được 
    ${tongTienLuong.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })}`;
};
//---------------------------------------------------------------------------------------------//