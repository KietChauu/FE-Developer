// Array (mảng)
let tenKiet = "Kiet";
// Kiệt Bình Phúc
const arrSinhVien = ["Kiệt", "Bình", "Phúc"];

// Vị trí phần tử (index) - vị trí đầu tiên lun bắt đầu bằng 0
let tenCuaKiet = arrSinhVien[0]; // "Kiệt"
console.log(`Xin chào ${tenCuaKiet}`);


// Độ dài mảng (length)
const leghth = arrSinhVien.length; // 3
console.log(leghth);
const phanTuCuoiCung = arrSinhVien[leghth - 1];
console.log(phanTuCuoiCung);


// Thay thế một phần tử trong mảng
arrSinhVien[1] = "Nhật"; // ["Kiệt", "Nhật", "Phúc"]


// Sử dụng vòng lặp để duyệt mảng
const tienLuong = [20000, 50000, 35000, 40000];
let tongTienLuong = 0;
for (let index = 0; index <= tienLuong.length - 1; index++) {
  console.log(tienLuong[index]);
  tongTienLuong += tienLuong[index];
}
console.log(tongTienLuong);

// Bài tập duyệt mảng với vòng lặp
const arrMonAn = [
  "Món Trung Há Cảo",
  "Món Việt Bánh Mì",
  "Món Trung Bò Hầm",
  "Món Việt Hoành Thánh",
];
// Thực hiện duyệt vòng lặp và kiểm tra xem trong tên các món ăn nào chứa từ món Việt thì hiển thị lên console
// let hoTen = "Châu Gia Kiệt";
// console.log(hoTen.toLowerCase().includes("chau"));
for (let i = 0; i <= arrMonAn.length - 1; i++) {
  let monAn = arrMonAn[i];
  if (monAn.includes("Món Việt")) {
    console.log(monAn);
  }
}


// for...in - for...of
// for...in --> trả về vị trí index của từng phần tử trong mảng
let arrHocSinh = ["Quyên", "Hạ", "Lan", "Hường"];
for (let index in arrHocSinh) {
  console.log(index);
  // xóa --> index vị rí cần xóa
}

// for...of --> trả về từng vị trí trong mảng
for (let hocSinh of arrHocSinh) {
  console.log(hocSinh);
}


// Kiểm tra độ dài của một chuỗi
let monAn = "Bò Kho"; // sẽ có bao nhiêu kí tự ?
console.log(monAn.length); // 6
console.log(monAn[3]); // K


/* Một số phương thức tương tác với mảng
Push (thêm vào cuối)
Pop (lấy phần tử cuối)
Unshift (thêm vào đầu)
Shift (lấy phần tử đầu)
*/
const arrHangXe = ["Toyota", "Honda", "Kia", "Mazda"];
arrHangXe.push("Hyundai"); // ["Toyota", "Honda", "Kia", "Mazda", "Hyundai"]
let xeHyundai = arrHangXe.pop(); // ["Toyota", "Honda", "Kia", "Mazda"]
arrHangXe.unshift("VinFast"); // ["VinFast", "Toyota", "Honda", "Kia", "Mazda"]
let xeVinFast = arrHangXe.shift(); // ["Toyota", "Honda", "Kia", "Mazda"]


// Bài làm
const arrNhanVien = [];
document.getElementById("form-them-nhan-vien").onsubmit = function (e) {
  e.preventDefault();
  let tenNhanVien = document.getElementById("tenNhanVien").value;
  // làm thế nào để kiểm tra  được tên nhân viên có nhập hay không ?
  // "" || "Ký tự"
  // truthy & falsy
  //   if (!tenNhanVien) {
  //     return;
  //   }
  if (tenNhanVien.trim().leghth === 0) {
    return;
  }
  arrNhanVien.push(tenNhanVien);
  console.log(arrNhanVien);

  let theCha = document.getElementById("renderNhanVien");
  let noiDung = "";
  for (let nhanVien of arrNhanVien) {
    noiDung += `<p class="bg-danger bg-opacity-75 p-3 text-white">${nhanVien}</p>`;
  }
  console.log(noiDung);
  theCha.innerHTML = noiDung;

  // reset dữ liệu trên form sau khi lấy dữ liệu xong
  e.target.reset();
};


// Nổi bọt (bubble)


// Phương thức reverse - splice - concat
// Bài tập
// Reverse (đảo ngược)
let newString = "tôi đi học"; // "cọh iđ iôt"
let stringReverse = "";
// for (let i = newString.length - 1)
console.log(newString.split(" ").reverse().join(""));

// Concat (hợp nhất mảng)
let arrXeHoiA = ["Toyota", "Honda", "Kia"];
let arrXehoiB = ["Mazda", "Hyundai"];
// for (let xe of arrXehoiB) {
//   arrXeHoiA.push(xe);
// }
// console.log(arrXeHoiA);
arrXeHoiA = arrXeHoiA.concat(arrXehoiB);
console.log(arrXeHoiA);