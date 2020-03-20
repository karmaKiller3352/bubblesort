let collection;
const collectionSize = 50;
const sortSpeed = 500;
const maxNum = 100;


const makeCollection = (numSize, collectionSize) => {
    const collection = [];
    const randNumber = (size) => Math.round(Math.random() * size);
    for (let i = 0; i < collectionSize; i += 1) {
        collection.push({
            number: randNumber(numSize),
            property: ""
        });
    }
    return collection;
}

const render = (collection, selector) => {
    const wrap = document.querySelector(selector);
    html = collection.reduce(
        (acc, { number, property}) => `${acc}<span style = "height:${number}px;" class = "${property}"></span>`, "",
    )
    wrap.innerHTML = html;
}

const generateCollection = () => {
    collection = makeCollection(maxNum, collectionSize);
    render(collection, '#view_before');
}

const iterate = (i, arr, size) => {
    if (i !== (size - 1)) {
        arr[i].property = 'darkgreen';
        arr[i+1].property = 'darkgreen';
        render(arr, '#view_after');
        if (arr[i].property === "darkgreen") arr[i].property = '';
        if (arr[i+1].property === "darkgreen") arr[i+1].property = '';
      
        if (arr[i].number > arr[i + 1].number) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            temp.property = 'darkgreen';
            arr[i + 1] = temp;
        }
        else if (arr[i].number === arr[i + 1].number) {
            arr[i+1].property = 'darkgreen';
            arr[i].property = '';
        }
        else {

        }
        setTimeout(() => {
            iterate(++i, arr, size);
        }, sortSpeed/arr.length)
    }
   
}

const sortCollection = (count, size) => {
    if (count !== collectionSize) {
        iterate(0, collection, size);
        setTimeout(() => {
            sortCollection(++count, --size);
        }, sortSpeed)
    }
}

document.getElementById('generate').addEventListener('click', generateCollection);
document.getElementById('sort').addEventListener('click', () => sortCollection(0, collectionSize) );
