// 初始化食材數據
let ingredients = [];

// 切換新增食材彈出視窗
function toggleAddForm() {
    const popup = document.getElementById("add-ingredient-popup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

// 新增食材
function addIngredient() {
    const name = document.getElementById('ingredient-name').value.trim();
    const quantity = document.getElementById('ingredient-quantity').value.trim();
    const date = document.getElementById('ingredient-date').value.trim();

    if (name && quantity && date) {
        ingredients.push({ name, quantity, date });
        renderIngredients();
        toggleAddForm(); // 關閉彈出視窗
        document.getElementById('add-ingredient-form').reset(); // 清空表單
    } else {
        alert('請完整填寫所有欄位！');
    }
}

// 搜尋食材
function searchIngredient() {
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const filteredIngredients = ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(searchValue)
    );
    renderIngredients(filteredIngredients);
}

// 刪除食材
function deleteIngredient(index) {
    ingredients.splice(index, 1); // 刪除指定索引的食材
    renderIngredients();
}

// 渲染食材表格
function renderIngredients(filteredData = null) {
    const ingredientBody = document.getElementById('ingredient-body');
    ingredientBody.innerHTML = ''; // 清空表格內容

    const dataToRender = filteredData || ingredients;

    if (dataToRender.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" class="text-muted">沒有找到任何食材。</td>
        `;
        ingredientBody.appendChild(row);
        return;
    }

    dataToRender.forEach((ingredient, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${ingredient.name}</td>
            <td>${ingredient.quantity}</td>
            <td>${ingredient.date}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteIngredient(${index})">刪除</button>
            </td>
        `;

        ingredientBody.appendChild(row);
    });
}
