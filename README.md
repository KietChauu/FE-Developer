# FE-Developer

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

![FE](https://blog.utopicode.io/wp-content/uploads/2023/03/A-Beginners-Guide-to-Front-end-Development_-Skills-Responsibilities-and-Tech-Stack.png)

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 1 & 2: Variable (Biến) & Data Type (Kiểu dữ liệu) & Operator (Toán tử)

Ở buổi đầu tiên học về:

### 1. Biến

```
  1. let (có thể ghi đè lên bằng gtrị khác)
  2. const (gtrị không thể ghi đè lên)
```

### 2. Các kiểu dữ liệu cơ bản

```
  1. string (chuỗi)
  2. number (số)
  3. boolean (true/false)
  4. oject
  5. array
  6. symbol
```

### 3. Toán tử

```
  1. +
  2. -
  3. *
  4. /
  5. % (chia lấy dư)
```

### 4. Toán tử gán

```
  1. +=
  2. -=
  3. *=
  4. /=
  5. %=
```

### 5. Phép tăng và phép giảm

|    Giá Trị    |                  Ý Nghĩa                  |
| ------------- |:-----------------------------------------:|
| ++tên_biến    | tăng 1 đơn vị rồi mới sử dụng giá trị mới |
| tên_biến++    | sử dụng giá trị cũ rồi mới tăng 1 đơn vị  |

### 6. DOM (Document Object Model)

#### 1. innerHTML (Thay đổi nội dung trong HTML)

```
document.title = "Buổi 1 JS";
let theH1 = document.getElementById("demo");
theH1.innerHTML = "Hello World";
```

#### 2. event (Sự kiện)

##### 1. onclick

```
document.getElementById("btnDangNhap").onclick = function () {
    console.log("Tôi đã click vào button");
    // Dom tới thẻ input và lấy dữ liệu
    let taiKhoan = document.getElementById("txt-taiKhoan").value;
    console.log(taiKhoan);

    let matKhau = document.getElementById("txt-matKhau").value;
    console.log(matKhau);
};
```

##### 2. addEventListener 

```
document.getElementById("btnEye").addEventListener("click", function () {
    document.querySelector("input[name='matKhau']").type = "text";
})
```

##### 3. onmouse (Bắt con trỏ chuột)

```
let theHinhAnh = document.getElementById("hinhAnh");
```

Đếm số lần con trỏ chuột di chuyển trong hình ảnh

```
theHinhAnh.onmousemove = function () {
    console.log("Con trỏ chuột đã di chuyển tới"); 
}
```

Thông báo đã trỏ chuột vào hình ảnh

```
theHinhAnh.onmouseenter = function () {
    console.log("Chuột vừa đi vào hình ảnh"); 
}
```

Thông báo chuột đã rời khỏi hình ảnh

```
theHinhAnh.onmouseleave = function () {
    console.log("Chuột vừa đi ra khỏi"); 
}
```

##### 4. class_ _ _ _ (Thay đổi giao diện)

|    Giá Trị   |                  Ý Nghĩa                   |
| -------------|:------------------------------------------:|
| className    | thay đổi không kiểm tra                    |
| classList    | kiểm tra nếu tồn tạo rồi sẽ không thay đổi |

```
document.querySelector(".btn-primary").onclick = function () {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".demo-noidung").classList.add("text-center");
    let classTheP = document.querySelector(".demo-noidung").className;
    console.log(classTheP); 
    document.querySelector(".demo-noidung").className += " text-center"; // "demo-noidung" + "text-center"
};
```

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 3:

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 4:

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 5 & 6: Array (Mảng)

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 7 & 8: Object (Đối tượng)

## ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) Buổi 9 & 10: Quản Lí Sinh Viên

## ![image](https://img.shields.io/badge/API-298D46?style=for-the-badge&logo=API&logoColor=white) Buổi 11 & 12: API

## ![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) Buổi 13: Base & Helper

## ![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) Buổi 14: Header & Aside 

## ![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) Buổi 15: Section Hero-Banner & Client
Buổi này tiếp tục học về SCSS, xaay dựng section hero-banner và client của trang.
