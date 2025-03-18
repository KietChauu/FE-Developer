// CRUD (create - read - update - delete)
// Restful API ==> GET (lấy dữ liệu) ==> POST (thêm dữ liệu) ==> PUT (chỉnh sửa) ==> DELETE (xóa)
// Pending (đang chờ) ==> Error (Có lỗi) ==> Success (Thành công)
// Status code (mã trạng thái)
// request (yêu cầu) và repone (trả về)
// Promise (lời hứa) || Async Await
// Lấy dữ liệu từ BE
async function getDataSinhVien() {
    let data = await axios({
        // method: Phương thức gọi dữ liệu 
        method: "GET",
        // domain + endpoint 
        url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    });
    console.log(data);
};

getDataSinhVien();

let promise = new Promise((resolve, reject) => {
    let data = axios({
        // method: Phương thức gọi dữ liệu 
        method: "get",
        // domain + endpoint 
        url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    });
    // resolve(data);
    reject("Có lỗi xảy ra");
});

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });