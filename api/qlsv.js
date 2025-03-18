const http = axios.create({
    baseURL: "https://svcy.myclass.vn/api/SinhVienApi",
    timeout: 30000,
});

/* Thêm SV ==> lấy dữ liệu từ form ==> gửi dữ liệu cho BE ==> thông báo ==> gọi dữ liệu toàn bộ SV để update với dữ liệu cũ 
xóa ==> id
hiển thị dữ liệu ==> gọi API ==> lưu trữ ==> hiển thị
cập nhật ==> gọi API lấy thông tin chi tiết SV ==> đưa dữ liệu lên form ==> lấy dữ liệu về và gửi cho BE ==> nhận thông báo và xử lí 
*/


function handleNotification(text, typeNoti) {
    // typeNoti ==> success ==> error 
    Toastify({
        text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js", // chuyển hướng 
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: typeNoti === "error" ? "red" : "green",
        },
        // onClick: function () { } // Callback after click
    }).showToast();
};

async function getDataiSinhVien() {
    try {
        let result = await http.get("LayDanhSachSinhVien");
        renderDataiSinhVien(result.data);
    } catch (error) { }
};

function renderDataiSinhVien(arr) {
    let content = "";
    console.log(arr);
    for (let sinhVien of arr) {
        console.log(sinhVien);
        // destructuring 
        let { maSinhVien, tenSinhVien, email, soDienThoai, loaiSinhVien, diemToan, diemLy, diemHoa, diemRenLuyen } = sinhVien;
        let diemTB = (diemToan + diemLy + diemHoa + diemRenLuyen) / 4;
        content += `
        <tr>
            <td>${maSinhVien}</td>
            <td>${tenSinhVien}</td>
            <td>${email}</td>
            <td>${soDienThoai}</td>
            <td>${loaiSinhVien}</td>
            <td>${diemTB}</td>
            <td>
                <button class="btn btn-danger">Xóa</button>
                <button class="btn btn-warning">Sửa</button>
            </td>
        </tr>`;
    };
    // Gọi DOM 
    document.getElementById("Tbody").innerHTML = content;
};


getDataiSinhVien();


// Gọi sự kiện submit và gắn func themSinhVien
// Gọi và lấy dữ liệu từ form 
function themSinhVien(event) {
    event.preventDefault();
    // sử dụng vòng lặp để duyệt danh sách các input trong form 
    let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
    console.log(arrField);
    let sinhVien = {};
    for (let field of arrField) {
        let { id, value } = field;
        id = id === "maSV" ? "maSinhVien" : id === "tenSV" ? "tenSinhVien" : id;
        sinhVien[id] = value;
    };
    console.log(sinhVien);
    let promise = axios({
        method: "POST",
        url: "https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
        data: sinhVien
    });
    promise
        .then((res) => {
            getDataiSinhVien();
            handleNotification(res.data, "success");
        })
        .catch((err) => {
            handleNotification("Có lỗi xảy ra", "error");
        })
};

document.getElementById("formQLSV").onsubmit = themSinhVien;