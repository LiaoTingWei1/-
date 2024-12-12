// script.js

function showPopup(title, steps) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");

    // 設置標題
    popupTitle.textContent = title;

    // 清空現有內容
    popupDescription.innerHTML = "";

    // 動態生成清單內容
    steps.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        popupDescription.appendChild(li);
    });

    // 顯示彈出框
    popup.classList.add("active");
}

// 隱藏彈出框
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
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