document.addEventListener('DOMContentLoaded', function() {
    const baseColorInput = document.getElementById('base-color');
    const saveColorButton = document.getElementById('save-color');
    const savedColorDiv = document.getElementById('saved-color');
    const savedColorsKey = 'savedColors';

    // Функция для сохранения цвета в локальное хранилище и вывода уведомления
    function saveColor() {
        const baseColor = baseColorInput.value;
        let savedColors = JSON.parse(localStorage.getItem(savedColorsKey)) || [];
        savedColors.push(baseColor);
        localStorage.setItem(savedColorsKey, JSON.stringify(savedColors));
        updateSavedColors();
        alert('Цвет сохранен в палитру!');
    }

    // Функция для обновления отображаемых сохраненных цветов
    function updateSavedColors() {
        savedColorDiv.innerHTML = ''; // Очищаем содержимое div перед обновлением
        let savedColors = JSON.parse(localStorage.getItem(savedColorsKey)) || [];
        savedColors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.style.backgroundColor = color;
            savedColorDiv.appendChild(colorDiv);
        });
    }

    // Вызываем функцию updateSavedColors при загрузке страницы
    updateSavedColors();

    // Вызываем функцию saveColor при клике на кнопку "Сохранить цвет"
    saveColorButton.addEventListener('click', saveColor);

    // Обработчик события для кнопок "like_but"
    const likeButtons = document.querySelectorAll('.like_but');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Вы добавили цвет в палитру!');
        });
    });
});
