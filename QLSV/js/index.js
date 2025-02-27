// 1. Thêm sinh viên vào mảng 
let arrSinhVien = [];

// Tạo sự kiện submit và tuơng tác với tác cả input 
document.getElementById("formQLSV").onsubmit = function (event) {
    event.preventDefault();

    let formValue = new FormData(event.target);
    let data = Object.fromEntries(formValue);

    arrSinhVien.push(data);

    // reset form
    event.target.reset();
    // render dữ liệu đang có trong mảng arrSinhVien ra giao diện
    renderDataSinhVien();
    saveLocalStorage("arrSinhVien", arrSinhVien);

};

function renderDataSinhVien() {
    let content = "";
    for (let sinhVien of arrSinhVien) {
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
                    <button class="btn btn-warning">Sửa</button>
                </td>
            <tr>
            `;
    };
    document.getElementById("tbodySinhVien").innerHTML = content;
};

function xoaSinhVien(mssv) {
    console.log("mssv");
    // splice 
    // findIndex
    let viTriCanXoa = arrSinhVien.findIndex((item, index) => {
        return item.txtMaSV === mssv;
    });
    if (viTriCanXoa !== -1) {
        arrSinhVien.splice(viTriCanXoa, 1);
        renderDataSinhVien();
        saveLocalStorage("arrSinhVien", arrSinhVien);
    }
}

function saveLocalStorage(key, value) {
    let datatString = JSON.stringify(value);
    localStorage.setItem(key, datatString);
};

function getLocalStorage() {
    let dataLocal = JSON.parse(localStorage.getItem("key"));
    return dataLocal;
};

// LocalStorage
// setItem, getItem, removeItem
// setItem
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
