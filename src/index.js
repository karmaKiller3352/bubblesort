import Sorting from './common.js';

const collectionSize = 200;
const sortSpeed = 1000;
const maxNum = 150;

const sort = new Sorting(collectionSize, sortSpeed, maxNum);

document.getElementById('generate').addEventListener('click', () => {
    sort.makeCollection();
    sort.render(sort.collection, '#view_before')
} );
document.getElementById('sort').addEventListener('click', () => {
    sort.sortCollection(sort.collectionSize),
    document.getElementById('generate').setAttribute('disabled', 'disabled')
} );
