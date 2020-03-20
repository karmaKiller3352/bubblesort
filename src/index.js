let collection;
const collectionSize = 20;
const sortSpeed = 1000;
const maxNum = 150;


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
    document.getElementById('generate').setAttribute('disabled', 'disabled');
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
            i += 1;
            iterate(i, arr, size);
        }, sortSpeed/arr.length)
    }
   
}

const sortCollection = (count, size) => {
    if (count !== collectionSize) {
        iterate(0, collection, size);
        setTimeout(() => {
            count += 1;
            size -= 1;
            sortCollection(count, size);
        }, sortSpeed)
    }
}

document.getElementById('generate').addEventListener('click', generateCollection);
document.getElementById('sort').addEventListener('click', () => sortCollection(0, collectionSize) );
