let btnOpenSidebar = document.querySelector("btn-open-sidebar");

if (btnOpenSidebar) {
    let overlay = document.querySelector(".overlay");
    let sidebarRight = document.querySelector("sidebar-right");

    btnOpenSidebar.onclick = function () {
        overlay.classList.add("active-overlay");
        sidebarRight.classList.add("active");
    }

    document.querySelector(".overlay").onclick = function () {
        overlay.classList.remove("active-overlay");
        sidebarRight.classList.remove("active");
    }
}