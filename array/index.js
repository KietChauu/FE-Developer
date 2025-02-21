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
  // xóa --> index vị trí cần xóa
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


// Phương thức reverse - concat
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


// Phương thức IndexOf và lastIndexOf 
const arrFood = [
  "Phở",
  "Bún",
  "Cơm chiên",
  "Bánh mì",
  "Cơm gà",
  "Cơm sườn",
  "Cơm chiên",
  "Bò kho",
  "Bún riêu",
  "Bánh giò"
];
// Tìm vị trí phần tử đầu tiên có chứ chữ "Cơm chiên"
// Khi tìm kiếm được phần tử đầu tiên, thì không duyệt mảng nữa 

// IndexOf (tìm kím vị trí phần tử đầu tiên)
// let viTriMonAn = -1;
// for (let i = 0; i <= arrFood.length - 1; i++) {
//   if (arrFood[i] == "Cơm chiên") {
//     viTriMonAn = i;
//     break;
//   }
// }
// console.log(viTriMonAn);
let viTriMonAn = arrFood.indexOf("Cơm chiên");
console.log(viTriMonAn);

// lastIndexOf ((tìm kím vị trí phần tử cuối cùng)
let viTriComChienCuoiCung = arrFood.lastIndexOf("Cơm chiên");
console.log(viTriComChienCuoiCung);

// Không dùng reverse, thực hiện đảo ngược mảng arrFood đang có 
let arrFood2 = [];
// duyệt mảng từ phần cuối
// for (let i = arrFood.length - 1; i >= 0; i--) {
//   arrFood2.push(arrFood[i])
// }
// duyệt mảng từ đầu và sử dụng unshift
for (let i = 0; i < arrFood.length; i++) {
  arrFood2.unshift(arrFood[i]);
}
console.log(arrFood2);

// Thực hiển đảo ngược mảng trên chính mảng đang có 
let start = 0; // vị trí phần tử bắt đầu 
let end = arrFood.length - 1; // vị trí phần tử kết thúc 

while (start < end) {
  let dataStart = arrFood[start];
  arrFood[start] = arrFood[end];
  arrFood[end] = dataStart;
  start++;
  end--;
}
console.log(arrFood);

// Splice (vị trí phần tử cần xóa, số lượng phần tử cần xóa)
let viTriComChien = arrFood.indexOf("Cơm chiên");
if (viTriComChien != -1) {
  arrFood.splice(viTriComChien, 1);
  console.log(arrFood);
}

// thêm một phần tử vào mảng bằng splice 
let arrCar = ["Honda", "Yamaha", "Suzuki", "Cambri"];
// let arrCar[1] =  
arrCar.splice(1, 2, "VinFast");
console.log(arrCar);


// Sort (sắp xếp dữ liệu)
arrFood.sort(); // bỏ trống là a - z
// arrFood.sort().reverse(); // đảo ngược z - a
console.log(arrFood);

let randomNumber = [45, 3, 28, 11, 5];
randomNumber.sort((a, b) => a - b); // từ nhỏ đến lớn 
console.log(randomNumber);


// Slice (cắt hàm trong mảng)
let arrConNguoi = ["Long", "Lan", "Hạ", "Quyên", "Hải"];
let arrConNguoi2 = arrConNguoi.slice(1, 4); // phải + 1 đơn vị ở end
console.log(arrConNguoi2);


// Phương thức Map 
let country = ["VietNam", "Singapore", "China", "American"];
// thay đổi các phần tử bên trong mảng country, bây giờ có thêm một phần nội dung tên là đất nước nằm phía trước 
// for (let i = 0; i < country.length; i++) {
//   country[i] = "Đất nước " + country[i]
// }
// console.log(country);

let country2 = country.map((item, index) => {
  console.log(item);
  return "Đất nước" + item;
})
console.log(country2);

// Phương thức Filter 
let arrTyPhu = ["Mr Vượng 7", "Phương Hằng 7", "Elizabeth 7", "Mac Donal 7"]
// thực hiện xử lí lọc mảng arrTyPhu và lấy ra các Tỷ Phú có số tiền lớn hơn 4 
let arrTyPhu2 = [];
for (let i = 0; i < arrTyPhu.length; i++) {
  let tyPhu = arrTyPhu[i];
  let arrChuoiTyPhu = tyPhu.split(" ");
  let soTien = arrChuoiTyPhu[arrChuoiTyPhu.length - 1] * 1;
  if (soTien > 4) {
    arrTyPhu2.push(tyPhu);
  }
};
console.log(arrTyPhu2);

let newArrTyPhu = arrTyPhu.filter((tyPhu, index) => {
  return tyPhu.includes("a");
});
console.log(newArrTyPhu);

// Phương thức Every
let ketQua = arrTyPhu.every((tyPhu, index) => {
  return tyPhu.includes("7");
});
console.log(ketQua);