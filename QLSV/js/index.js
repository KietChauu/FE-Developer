// Thêm sinh viên vào mảng 
let arrSinhVien = [];

// Tạo sự kiện submit và tuơng tác với tác cả input

function getDataForm(form) {
    let formValue = new FormData(form);
    let data = Object.fromEntries(formValue);
    return (data)
}

function actionWithData() {
    renderDataSinhVien();
    saveLocalStorage("arrSinhVien", arrSinhVien);
}

document.getElementById("formQLSV").onsubmit = function (event) {
    event.preventDefault();

    let data = getDataForm(event.target);

    arrSinhVien.push(data);

    // reset form
    event.target.reset();
    // render dữ liệu đang có trong mảng arrSinhVien ra giao diện
    actionWithData();

};

// Render lên màn hình
function renderDataSinhVien(arr = arrSinhVien) {
    let content = "";
    for (let sinhVien of arr) {
        const { txtMaSV, txtTenSV, txtEmail, txtNgaySinh, khSV, txtDiemToan, txtDiemLy, txtDiemHoa } = sinhVien;
        let diemTrungBinh = (txtDiemToan * 1 + txtDiemLy * 1 + txtDiemHoa * 1) / 3;
        content += `
            <tr>
                <td>${txtMaSV}</td>
                <td>${txtTenSV}</td>
                <td>${txtEmail}</td>
                <td>${txtNgaySinh}</td>
                <td>${khSV}</td>
                <td>${diemTrungBinh.toFixed(2)}</td>
                <td>
                    <button onclick="xoaSinhVien('${txtMaSV}')" class="btn btn-danger">Xóa</button>
                    <button onclick="layThongTinSinhVien('${txtMaSV}')" class="btn btn-warning">Sửa</button>
                </td>
            <tr>
            `;
    };
    document.getElementById("tbodySinhVien").innerHTML = content;
};

// Chức năng xóa sinh viên
function xoaSinhVien(mssv) {
    console.log("mssv");
    // splice 
    // findIndex
    let viTriCanXoa = arrSinhVien.findIndex((item, index) => {
        return item.txtMaSV === mssv;
    });
    if (viTriCanXoa !== -1) {
        arrSinhVien.splice(viTriCanXoa, 1);
        actionWithData();
    }
}

/* Chức năng sửa sinh viên 
Tạo hàm lấy thông tin sinh viên (mssv)
Thực hiện sử dụng hàm find để tìm kiếm 
Sau khi có dữ liệu thao tác đưa dữ liệu vào các input và select
Ngăn chặn người dùng chỉnh sửa input thông qua thuộc tính readonly và disabled */
function layThongTinSinhVien(mssv) {
    let sinhVien = arrSinhVien.find((item, index) => {
        return item.txtMaSV === mssv;
    });
    if (sinhVien) {
        console.log(sinhVien);
        let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
        console.log(arrField);
        // for (let key in sinhVien) {
        //     console.log(key);
        // };
        // Mình sẽ dùng key của object để truy xuất và đưa dữ liệu vào các input thông qua id
        for (let field of arrField) {
            console.log(field);
            let { name } = field;
            field.value = sinhVien[name];
            if (field.name == "txtMaSV") {
                field.readOnly = true;
            };
        };
    };
};

/* Viết một sự kiện click dành cho nút cập nhật
Lấy dữ liệu từ form 
Dựa trên msssv đang có, tìm kiếm vị trí của phần tử đang nằm trong mảng và thay thế 
Clear dữ liệu  của form và loại bỏ readOnly khỏi input mã sinh viên
Lưu dữ liệu mảng mới vào localStorage
Chạy lại hàm render */
document.querySelector(".btn-info").onclick = function () {
    let formQLSV = document.getElementById("formQLSV");
    let sinhVien = getDataForm(formQLSV);

    let viTri = arrSinhVien.findIndex((item, index) => {
        return item.txtMaSV === sinhVien.txtMaSV;
    })
    if (viTri !== -1) {
        arrSinhVien[viTri] = sinhVien;
        formQLSV.reset();
        document.getElementById("txtMaSV").readOnly;
        actionWithData();
    };
};

// Lưu vào LocalStorage
function saveLocalStorage(key, value) {
    let datatString = JSON.stringify(value);
    localStorage.setItem(key, datatString);
};

function getLocalStorage(key) {
    let dataLocal = JSON.parse(localStorage.getItem(key));
    return dataLocal;
};


// LocalStorage
// setItem, getItem, removeItem

// // setItem
// localStorage.setItem("hoTen", "Kiệt");
// let data1 = {
//     hoTen: "abc"
// };
// // Chuyển đổi dữ liệu object thành chuỗi JSON
// let datatString = JSON.stringify(data1);
// localStorage.setItem("sinhVien", datatString);

// // getItem
// let dataLocal = localStorage.getItem("arrSinhVien");
// console.log(JSON.parse(dataLocal));

// // removeItem
// localStorage.removeItem("hoTen");


// Sự kiệm onload
window.onload = function () {
    arrSinhVien = getLocalStorage("arrSinhVien") ? getLocalStorage("arrSinhVien") : [];
    console.log(arrSinhVien);
    renderDataSinhVien();
};

// Điện thoại
// dien thoai || điện thoai || ĐIỆN THOẠI 
/* Loại bỏ hết dấu câu tiếng việt, 
Chuyển đổi về hết thành chữ thường, 
Loại bỏ hết khoảng trắng nằm ở đầu và cuối */
document.getElementById("txtSearch").oninput = function (event) {
    let keyWordLoaiBoTiengViet = removeVietnameseTones(event.target.value).toLowerCase().trim();

    let arrFilterSinhVien = arrSinhVien.filter((item, index) => {
        let tenSinhVienConvert = removeVietnameseTones(item.txtTenSV).toLowerCase().trim();
        return tenSinhVienConvert.includes(keyWordLoaiBoTiengViet);
    });
    console.log(arrFilterSinhVien);

    // let arrFilterSinhVien = [];
    // for (let sinhVien of arrSinhVien) {
    //     // xử lí dữ liệu tên sinh viên 
    //     let tenSinhVienConvert = removeVietnameseTones(sinhVien.txtTenSV).toLowerCase().trim();
    //     if (tenSinhVienConvert.includes(keyWordLoaiBoTiengViet)) {
    //         console.log(sinhVien);
    //         arrFliterSinhVien.push(sinhVien);
    //     };
    // };
    renderDataSinhVien(arrFilterSinhVien);
};