// script.js

// 顯示彈出視窗
function showPopup(title, description) {
    const popup = document.getElementById("popup");
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    popup.style.display = "flex";
}

// 隱藏彈出視窗
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
// 平滑滾動到熱門菜單區域
function scrollToPopularMenu() {
    const target = document.getElementById("popular-menu"); // 找到目標元素
    target.scrollIntoView({
        behavior: "smooth", // 平滑滾動
        block: "start"      // 滾動到區域頂部
    });
}
function scrollToTop() {
    window.scrollTo({
        top: 0,          // 滾動到頂部
        behavior: "smooth" // 平滑滾動
    });
}
function scrollToRecommendMenu() {
    const target = document.getElementById("recommend-menu");
    target.scrollIntoView({
        behavior: "smooth", // 平滑滾動
        block: "start"      // 滾動到元素的頂部
    });
}