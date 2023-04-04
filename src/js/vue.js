const currentDate = new Date(); // создаем новый объект даты
const dateElement = document.querySelector('.date'); // находим элемент с классом "date"

dateElement.textContent = currentDate.toLocaleDateString();

