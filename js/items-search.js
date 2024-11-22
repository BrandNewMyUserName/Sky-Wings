// 

// Отримуємо необхідні елементи
const searchInput = document.getElementById('search-input');
// const searchButton = document.querySelector('.search-button');
const searchCards = document.querySelectorAll('.searach-card');

// Додаємо обробник події на кнопку "Знайти"
// searchButton.addEventListener('click', () => {
//     const searchValue = searchInput.value.trim().toLowerCase(); // Отримуємо текст з поля вводу
//     filterCards(searchValue); // Викликаємо функцію фільтрації
// });

// Додаємо обробник події для вводу в поле (динамічне оновлення)
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    if (searchValue === '') {
        resetCards(); // Якщо поле пусте, показуємо всі товари
    } else {
        filterCards(searchValue); // Інакше фільтруємо
    }
});

// Функція для фільтрації товарів
function filterCards(searchValue) {
    searchCards.forEach((card) => {
        const title = card.querySelector('.search-card__title').textContent.toLowerCase(); // Отримуємо текст назви
        if (title.includes(searchValue)) {
            card.style.display = 'block'; // Показуємо відповідний товар
        } else {
            card.style.display = 'none'; // Ховаємо невідповідні товари
        }
    });
}

// Функція для повернення всіх товарів
function resetCards() {
    searchCards.forEach((card) => {
        card.style.display = 'block'; // Показуємо всі товари
    });
}
