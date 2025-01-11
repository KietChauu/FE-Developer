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


// 6. DOM (Document Object Model)
// - Thay đổi nội dung trong HTML
document.title = "Buổi 1 JS";
let theH1 = document.getElementById("demo");
theH1.innerHTML = "Hello World";
let noiDungTheH1 = document.getElementById("demo").innerHTML;
console.log(noiDungTheH1);
theH1.style.backgroundColor = "red";

let theDemoContent = document.querySelector(".demo-content");
theDemoContent.style.backgroundColor = "green";
document.querySelector(".content-item").style.height = "50vh";
console.log(theDemoContent.querySelector("#demo2"));

// - Sự kiện trong JS
// 1.Onclick 
document.getElementById("btnDangNhap").onclick = function () {
    console.log("Tôi đã click vào button");
    // Dom tới thẻ input và lấy dữ liệu
    let taiKhoan = document.getElementById("txt-taiKhoan").value;
    console.log(taiKhoan);

    let matKhau = document.getElementById("txt-matKhau").value;
    console.log(matKhau);
};

// Ẩn hiện mật khẩu 
document.getElementById("btnEye").addEventListener("click", function () {
    document.querySelector("input[name='matKhau']").type = "text";
})

// 2. Sự kiện bắt con trỏ chuột 
let theHinhAnh = document.getElementById("hinhAnh");
theHinhAnh.onmousemove = function () {
    console.log("Con trỏ chuột đã di chuyển tới"); // đếm số lần con trỏ chuột di chuyển tronh hình ảnh
}
theHinhAnh.onmouseenter = function () {
    console.log("Chuột vừa đi vào hình ảnh"); // thông báo đã trỏ chuột vào hình ảnh
}
theHinhAnh.onmouseleave = function () {
    console.log("Chuột vừa đi ra khỏi"); // thông báo chuột đã rời khỏi hình ảnh
}

// 3. Thay đổi giao diện
/* 
- className: thay đổi không kiểm tra
- classList: kiểm tra nếu tồn tạo rồi sẽ không thay đổi 
*/ 
document.querySelector(".btn-primary").onclick = function () {
    // document.querySelector("body").classList.toggle("dark");
    // document.querySelector(".demo-noidung").classList.add("text-center");
    // let classTheP = document.querySelector(".demo-noidung").className;
    // console.log(classTheP); 
    document.querySelector(".demo-noidung").className += " text-center"; // "demo-noidung" + "text-center"
};

// chuỗi HTML | createElement
// thêm thẻ <div>Hello</div>
let diemThi = 9;
document.getElementById("container-demo").innerHTML += 
`<div class="table-responsive">
    <table class="table table-primary"> 
        <thead>
            <tr>
                <th scope="col">${diemThi}</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
            </tr>
        </thead>
        <tbody>
            <tr class="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
            </tr>
            <tr class="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
            </tr>
        </tbody>
    </table>
</div>`;

// 5. Tạo biến để lưu thẻ 
let theImg = document.createElement("img");
theImg.src = "https://genk.mediacdn.vn/2019/5/23/image002-1558599409632434775215.png";
theImg.className = "w-100 h-100";

document.getElementById("container-demo").appendChild(theImg);


/* Bài tập tính lương nhân viên
1. Tạo một sự kiện click cho nút tính toán
2. Lấy tất cả dữ liệu người dùng có trên các input và tạo biến nhận giá trị
3. Lương mỗi giờ của nhân viên là 200k
4. thực hiện tính toán : lấy lương mỗi giờ * số giờ làm - số giờ nghỉ * hệ số lương
5. Hiển thị kết quả lên giao diện thông qua thẻ div có id ketQua
Nhân viên bình có tổng tiền lương là: vnd
*/

document.getElementById("btnTinhToan").onclick = function () {
    
    let hoTen = document.getElementById("hoTen").value;
    console.log(hoTen);

    let soGioLam = document.getElementById("soGioLam").value * 1;
    console.log(soGioLam);

    let heSoLuong = document.getElementById("chucVu").value * 1;
    console.log(heSoLuong);

    let soGioNghi = document.getElementById("soGioNghi").value * 1;
    console.log(soGioNghi);

    const LUONG_MOI_GIO = 200000;
    let tongTienLuong = (soGioLam - soGioNghi) * LUONG_MOI_GIO * heSoLuong;

    document.getElementById("ketQua").innerHTML = `Nhân viên ${hoTen} có tổng tiền lương là: 
    ${tongTienLuong.toLocaleString("vi-VN",
        {
            style: "currency",
            currency: "VND",
        })
    }`;
};