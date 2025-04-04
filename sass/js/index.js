document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector("aside");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".logo-aside button");
    const menuButton = document.querySelector("header button"); // Nút menu hình tròn

    if (!aside || !overlay || !closeButton || !menuButton) {
        console.error("Không tìm thấy các phần tử cần thiết trong DOM.");
        return;
    }

    // Hàm đóng aside
    const closeAside = () => {
        aside.style.transform = "translateX(100%)"; // Đẩy aside ra khỏi màn hình
        overlay.style.display = "none"; // Ẩn overlay
    };

    // Hàm mở aside
    const openAside = () => {
        aside.style.transform = "translateX(0)"; // Đưa aside vào màn hình
        overlay.style.display = "block"; // Hiển thị overlay
    };

    // Sự kiện khi nhấn nút "X"
    closeButton.addEventListener("click", closeAside);

    // Sự kiện khi nhấn vào overlay
    overlay.addEventListener("click", closeAside);

    // Sự kiện khi nhấn vào nút menu
    menuButton.addEventListener("click", openAside);

    // Gắn hàm vào window để kiểm tra (nếu cần)
    window.openAside = openAside;
});