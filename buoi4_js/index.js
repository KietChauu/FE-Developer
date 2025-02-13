// Đóng gói module
// Tái cấu trúc

// Có 3 dạng: function, arrow function, expression function

tinhThue(50000, 0.3);

function tinhThue(tongTienLuong, phanTramThue) {
  // Nơi xử lí các hành động
  console.log(tongTienLuong);
  console.log(phanTramThue);
  const soTienThue = tongTienLuong * phanTramThue;
  console.log(soTienThue);

  // trả về giá trị để lưu trữ
  return soTienThue;
}

let tienThueKiet = tinhThue(15000, 0.1);
console.log(tienThueKiet);

// expression function
// tinhDiemTrungBinh(1, 2, 3); // không được khai báo hàm trước khi dùng let

let tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
  // Tạo 3 tham số lấy giá trị Toán Lí Hóa
  // Tính toán điểm trung bình và trả về giá trị
  // gọi hàm và chuyền kết quả vào
  let diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;
  return diemTrungBinh.toFixed(2); // làm tròn 2 chữ số
};

let diemcuaLong = tinhDiemTrungBinh(7, 5, 8);
console.log(diemcuaLong);

console.log(Math.PI); // 3.14

//---------------------------------------------------------------------------------------------//
/* Một chủ nhà hàng yêu cầu viết một chương trình tính toán tiền giảm giá món ăn cho khách 
- Chương trình cho phép nhập vào số lượng món, giá món, tên món, và phần trăm giảm giá 
- Sau khi nhận được các giá trị, thực hiện tính toán và trả về số tiền được giảm 
- Sau khi tạo xong chương trình, chạy thử với giá tiền 3 món bất kì 
*/

// default parameter
function tinhTienGiamGia(soLuong, giaMon, tenMon, giamGia = 0.1) {
  // if (!giamGia) {
  //     giamGia = 0.1;
  // }
  let tongSoTien = soLuong * giaMon;
  let soTienDuocGiam = tongSoTien * giamGia;
  return soTienDuocGiam;
}

tinhTienGiamGia(2, 50000, "Bò Kho", 0.3);
tinhTienGiamGia(5, 10000, "Bánh plan", 0.1);
tinhTienGiamGia(4, 10, "Hủ tíu");
//---------------------------------------------------------------------------------------------//

// string template (E6) ==> ``
// default parameter ==>
// arrow function (ES6)
// 200000

// Cách 1
// let tinhTongTienHang = (soLuong) => {
//     return soLuong * 200000;
// }

// Cách 2
let tinhTongTienHang = (soLuong) => soLuong * 200000;

// Cách 3
// let tinhTongTienHang = soLuong => soLuong * 200000;

tinhTongTienHang(5);

document.getElementById("tinhTien").onclick = (event) => {
  let loaiKhach = document.getElementById("loaiKhach").value;
  let soLuongKhach = document.getElementById("soNguoi").value * 1;
  let tongTien = document.getElementById("tongSoTien").value * 1;
  let phanTramGiamGiaSoNguoi;

  if (soLuongKhach > 5) {
    phanTramGiamGiaSoNguoi = 0.3;
  } else if (soLuongKhach >= 2 && soLuongKhach <= 5) {
    phanTramGiamGiaSoNguoi = 0.2;
  } else {
    phanTramGiamGiaSoNguoi = 0.1;
  }

  // nếu như % giảm giá số người không có, sẽ thực hiện thao tác ngưng hàm
  if (!phanTramGiamGiaSoNguoi) {
    return;
  }

  let phanTramGiamGiaLoaiKhach =
    loaiKhach == "vip" ? 0.1 : loaiKhach == "vanglai" ? 0.05 : null;
  let tienSauGiamGia =
    tongTien - tongTien * (phanTramGiamGiaLoaiKhach + phanTramGiamGiaSoNguoi);
  document.getElementById("ketQua").innerHTML = `Tổng số tiền thanh toán là 
    ${tienSauGiamGia.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })}`;
};

// Callback function ==> tham số
function tinhDiem(diemA, diemB, callback) {
  let ketQua = diemA + diemB;
  if (callback) {
    callback(ketQua);
  }
}

function hienThiDiem(diem) {
  console.log(`Chúc mừng bạn đạt được ${diem}`);
}

function xetKetQua(diem) {
  console.log(
    `Kết quả điểm của bạn là ${diem} và thông báo bạn đã ${
      diem >= 5 ? "Đậu" : "Rớt"
    }`
  );
}

tinhDiem(5, 6, xetKetQua);

// Loop: While, do...while, for
/*
1. Biến bước nhảy
2. Kiểm tra điều kiện 
3. Thao tác xử lý qua mỗi lần lập
4. Tăng hoặc giảm biến bước nhảy 
*/

let index = 1;
// index phải bé hơn hoặc bằng với 10
while (index <= 10) {
  // Thao tác xử lý qua mỗi lần lập
  console.log(index);

  // Tăng hoặc giảm biến bước nhảy
  index++;
}

// điếm xem có bao nhiêu số chia hết cho 2 từ 0 đến 85
let demSoChan = 0;
let i = 0;
while (i <= 85) {
  if (i % 2 == 0) {
    demSoChan++;
  }
  i++;
}
console.log(demSoChan);

let buocNhay = 1;
while (buocNhay <= 5) {
  if (buocNhay == 3) {
    break;
  }
  console.log(buocNhay);
  buocNhay++;
}

// thực hiện đếm có bao nhiu số chia hết cho 3 từ 1 đến 25
let z = 1;
let demSo = 0;
do {
  if (z % 3 == 0) {
    demSo++;
  }
  z++;
} while (z <= 25);

// biến bước nhảy, điều kiện, tăng biến bước nhảy
// 1 * 2 * 3 * 4 * 5
let ketQua = 1;
for (let g = 1; g <= 20; g++) {
  ketQua *= g;
}
console.log(ketQua);