// Cấu hình axios
const http = axios.create({
    baseURL: "https://svcy.myclass.vn/api/SinhVienApi",
    timeout: 30000, // thời gian chờ 3s 
});

let domArrField = document.querySelectorAll("#formQLSV input, #formQLSV select");

let domForm = document.getElementById("formQLSV");

/* Thêm SV ==> lấy dữ liệu từ form ==> gửi dữ liệu cho BE ==> thông báo ==> gọi dữ liệu toàn bộ SV để update với dữ liệu cũ 
xóa ==> id
hiển thị dữ liệu ==> gọi API ==> lưu trữ ==> hiển thị
cập nhật ==> gọi API lấy thông tin chi tiết SV ==> đưa dữ liệu lên form ==> lấy dữ liệu về và gửi cho BE ==> nhận thông báo và xử lí 
*/

// Hàm thông báo 
function handleNotification(text, typeNoti) {
    // typeNoti ==> success ==> error 
    Toastify({
        text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js", // chuyển hướng 
        // newWindow: true, // mở cửa sổ mới 
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

// Thêm sinh viên
async function getDataiSinhVien() {
    try {
        let result = await http.get("LayDanhSachSinhVien");
        renderDataiSinhVien(result.data);
    } catch (error) { }
};

// Render ra màn hình
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
                <button class="btn btn-danger" onclick="xoaSinhVien('${maSinhVien}')">Xóa</button>
                <button class="btn btn-warning" onclick="layThongTinSinhVien('${maSinhVien}')">Sửa</button>
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
    let sinhVien = {};
    for (let field of domArrFieldrrField) {
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

// Xóa sinh viên 
function xoaSinhVien(mssv) {
    // thực hiện gắn hàm xoaSinhVien vào nút button và lấy mssv 
    // thực hiện dùng axios để gọi API xóa sinh viên, mssv sẽ được gắn vào url (string template)
    // sau khi xóa, kiểm tra xử lí thành công hay thất bại và thông báo cho người dùng bằng toastify 

    // let promise = axios({
    //     method: "DELETE",
    //     url: `https://svcy.myclass.vn/api/QuanLySinhVien/XoaSinhVien?maSinhVien=${mssv}`
    // });
    // promise
    //     .then((res) => {
    //         getDataiSinhVien();
    //         handleNotification(res.data, "success")
    //     })
    //     .catch((err) => {
    //         handleNotification("Có lỗi xảy ra", "error");
    //     });

    http
        .delete(`/XoaSinhVien?maSinhVien=${mssv}`)
        .then((res) => {
            console.log(res);
            getDataiSinhVien();
            handleNotification(res.data, "success");
        })
        .catch((err) => {
            console.log(err);
            let errorMessage = err.reponse.status === 500 ? "Có lỗi xảy ra" : err.reponse.data.Message;
            handleNotification(errorMessage, "error");
            getDataiSinhVien();
        });
};

// Sửa sinh viên
function layThongTinSinhVien(mssv) {
    http
        .get(`/LayThongTinSinhVien?maSinhVien=${mssv}`)
        .then((res) => {
            console.log(res);
            for (let field of domArrField) {
                let { id } = field;
                id = id === "maSV" ? maSinhVien : id === "tenSV" ? "tenSinhVien" : id;
                field.value = res.data[field.id]
                if (id === "maSinhVien") {
                    field.disabled = true;
                };
            };
        })
        .catch((err) => {
            console.log(err);
        });
};

document.querySelector(".btn-primary").onclick = function () {
    let sinhVien = {};
    for (let field of domArrField) {
        let { id, value } = field;
        id = id === "maSV" ? "maSinhVien" : id === "tenSV" ? "tenSinhVien" : id;
        sinhVien[id] = value;
    };
    // bên trong sv sẽ có chứa mã sv để gửi lên BE
    http
        .put(`/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`, sinhVien)
        .then((res) => {
            console.log(res);
            getDataiSinhVien();
            handleNotification(res.data, "success");
            document.getElementById("maSV").disabled = false;
            domForm.reset();
        })
        .catch((err) => {
            console.log(err);
            handleNotification("Có lỗi khi cập nhật, vui lòng cập nhật lại", "error");
        });
};