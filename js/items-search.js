const searchInput = document.getElementById('search-input');
const searchCards = document.querySelectorAll('.searach-card');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    if (searchValue === '') {
        resetCards(); 
    } else {
        filterCards(searchValue); 
    }
});


function filterCards(searchValue) {
    searchCards.forEach((card) => {
        const title = card.querySelector('.search-card__title').textContent.toLowerCase(); // Отримуємо текст назви
        if (title.includes(searchValue)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}


function resetCards() {
    searchCards.forEach((card) => {
        card.style.display = 'block'; 
    });
}
