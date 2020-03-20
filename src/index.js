import Sorting from './common.js';

const collectionSize = 120; // количество элементов в коллекции
const sortSpeed = 500; // скорость сортировки
const maxNum = 200; // максимальное число в коллекции (соответственно и высота столбика)

const sort = new Sorting(collectionSize, sortSpeed, maxNum); // инициализация

// привязка обработчиков
document.getElementById('generate').addEventListener('click', () => {
    document.getElementById('sort').removeAttribute('disabled')
    sort.makeCollection(); // создание коллекции
    sort.render(sort.collection, '#view_before') // рендеринг
} );
document.getElementById('sort').addEventListener('click', () => {
    sort.sortCollection(sort.collectionSize); // запуск сортировки
    document.getElementById('generate').setAttribute('disabled', 'disabled'); // блокировка кнопки до сброса
    document.getElementById('sort').setAttribute('disabled', 'disabled');  // блокировка кнопки до сброса
} );
