// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает 
// один параметр - число. Функция создает столько < div >, 
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает 
// содержимое div#boxes, тем самым удаляя все созданные элементы.

const controlsDiv = document.querySelector("#controls");
const amountInput = controlsDiv.firstElementChild;

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxDiv = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = [];

btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  boxDiv.innerHTML = '';
  elements.splice(0, 100);
  for (let i = 1; i <= Number(amountInput.value); i += 1) {
    const newDiv = document.createElement('div');
    console.log(newDiv);

    const newSquare = Number(20 + i * 10);
    newDiv.style.cssText = `
      background-color: ${getRandomHexColor()};
      width: ${newSquare}px;
      height: ${newSquare}px;
      margin-top: 5px;
      margin-bottom: 5px;
      border-radius: 4px;
    `;
  
    elements.push(newDiv);

  }; 
  boxDiv.append(...elements);
  console.log(`${amountInput.value}`);
};

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  amountInput.value = '';
  boxDiv.innerHTML = '';
  elements.splice(0, 100);
};