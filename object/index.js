// Object (đối tượng)
let sinhVienKiet = {
    hoTen: "Kiệt",
    namSinh: 2000,
    gioiTinh: "Nam",

    hienThiThongTin: function () {
        // con trỏ this ==> 
        console.log(`Sinh viên ${this.hoTen} có năm sinh ${this.namSinh}`);
    }
}
// key - value
console.log(sinhVienKiet.hoTen);
// "hoTen" || "namSinh" || "gioiTinh"
let data = "hoTen";
console.log(sinhVienKiet[data]);
sinhVienKiet.hienThiThongTin();


// Gán dữ liệu
sinhVienKiet.namSinh = 2004;
sinhVienKiet["hoTen"] = "Quách Tuấn Kiệt";
sinhVienKiet["diaChi"] = "Q.GV";
console.log(sinhVienKiet);


let arrSinhVien = []
// Tạo một sự kiện click dành cho nút thêm thông tin
// Lấy dữ liệu từ 4 input
// Tạo object chứa dữ liệu người dùng
// Thêm object này vàng mảng arrSinhVien

document.querySelector(".btn-dark").onclick = function () {
    let sinhVien = {};
    // let hoTen = document.getElementById("hoTen").value;
    // let diemToan = document.getElementById("diemToan").value * 1;
    // let diemLy = document.getElementById("diemLy").value * 1;
    // let diemHoa = document.getElementById("diemHoa").value * 1;

    // sinhVien.hoTen = hoTen;
    // sinhVien.diemToan = diemToan;
    // sinhVien.diemLy = diemLy;
    // sinhVien.diemHoa = diemHoa;

    // console.log(sinhVien);
    // arrSinhVien.push(sinhVien);

    // array sẽ được trả về khi sử dụng querySeclectorAll
    let arrField = document.querySelectorAll("#baiTap1 input");
    for (let field of arrField) {
        let { value, id } = field;
        sinhVien[id] = value;
    }
    arrSinhVien.push(sinhVien);
    console.log(arrSinhVien);

    // sử dụng dữ liệu đang có bên trong arrSinhVien để render lên giao diện 
    // Chạy vòng lặp để tạo chuỗi html
    // tr 5 td
    // Sau khi dùng vòng lặp để tạo chuỗi html xong, sẽ DOM tới chuỗi tbody và dùng innerHTML đưa lên giao diện
    let content = "";
    arrSinhVien.forEach((item, index) => {
        let { hoTen, diemToan, diemLy, diemHoa } = item;
        content += `
            < tr >
                <td>${index + 1}</td>
                <td>${hoTen}</td>
                <td>${diemToan}</td>
                <td>${diemLy}</td>
                <td>${diemHoa}</td>
            </tr >
            `;
    });
    document.querySelector("tbody").innerHTML = content;
};


// Phương thức về object trong ES6
let objectA = {
    ten: "Lan",
    tuoi: 15,
};
let objectB = objectA;
let objectC = {
    ten: "Lan",
    tuoi: 15,
};

objectB.ten = "Hường";
console.log(objectA);

// Object.assign (để clone)
// Một người cho và một người nhận
let objectD = {};
Object.assign(objectD, objectA);
console.log(objectD == objectA);
objectD.ten = "Cúc";
console.log(objectA);

// Spread operator 
// Array || Function
console.log(typeof []);
// let arrXeHoi = ["Honda", "Yamaha"];
// let arrXeHoi2 = arrXeHoi;
// arrXeHoi2[0] = "Suzuki";
// console.log(arrXeHoi);
let objectE = { ...objectA, ten: "Bình" };
console.log(objectE);

// Destructuring (ES6)
let monAn = {
    tenMon: "mì xào",
    giaTien: 25000,
};
let tenMon = monAn.tenMon;
let { giaTien, tenMon: tenMonAn } = monAn;
console.log(giaTien);
console.log(tenMonAn);

// Object literal (ES6)
let tenXeHoi = "Mazda";
let xeHoi = {
    tenXeHoi,
    namSanXuat: 2000,
};

// Loại bỏ các giá trị trùng lặp 
let arrNumber = [4, 54, 25, 4, 17, 26, 25, 33, 87];
// Xử lí loại bỏ các phần tử trùng lặp trong mảng
// let bienDoi = new Set(arrNumber)
// let traVe = [...bienDoi]
// console.log(traVe);

// Cách 1
let checkTrungLap = {};
arrNumber.forEach((item, index) => {
    if (checkTrungLap[item]) {
        arrNumber.splice(index, 1);
    } else {
        checkTrungLap[item] = true;
    };
});
console.log(arrNumber);

// Cách 2
// for (let i = 0; i < arrNumber.length; i++) {
//     for (let z = 1; z < arrNumber.length; z++) {
//         if (arrNumber[z] === arrNumber[i]) {
//             arrNumber.splice(z, 1);
//         };
//     };
// };
// console.log(arrNumber);

// Rest parameter (ES6)
// 5 môn ==>
function tinhDiem(tenNguoiDung, ...arrDiem) {
    console.log(arrDiem);
    let tongDiem = 0;
    arrDiem.forEach((item, index) => {
        tongDiem += item;
    });
    return tongDiem / arrDiem.length;
};
tinhDiem("Lan", 3, 4, 7, 8, 1);
tinhDiem(9, 5);

// Class (OOP)
class NhanVien {
    // contructor
    // mssv, hoTen, chucVu, soNgayLamsoNgayLam
    contructor(msnv, hoTen, chucVu, soNgayLam) {
        this.msnv = "msnv";
        this.hoTen = "hoTen";
        this.chucVu = "chucVu";
        this.soNgayLam = "soNgayLam";
    };
};

class GiamDoc extends NhanVien {
    contructor() {
        super(msnv, hoTen, chucVu, soNgayLam);
        this.soNgayNghi = 5;
    };
};

let giamDocLam = new GiamDoc("FE140", "Minh", "Nhân Sự", 4);
console.log(giamDocLam);