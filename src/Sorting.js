export default class Sorting{
    // конструктор принимает значения для задания параметров коллекции
    constructor (collectionSize, sortSpeed, maxNum) {
        this.collectionSize = collectionSize;
        this.sortSpeed = sortSpeed;
        this.maxNum = maxNum;
    }
    // геттеры, сеттеры добавлены, исключительно, для возможности расширения интерфейса
    setCollectionSize (size) {
        this.collectionSize = size;
    }
    setSortSpeed (speed) {
        this.sortSpeed = speed;
    }
    setMaxNum (num) {
        this.maxNum = num;
    }
    getCollectionSize () {
        return this.collectionSize;
    }
    getSortSpeed () {
        return this.sortSpeed;
    }
    getMaxNum () {
        return this.maxNum;
    }
    // создание набора на основе заданных в конструкторе параметров
    makeCollection () {
        const collection = [];
        const randNumber = (size) => Math.round(Math.random() * size);
        for (let i = 0; i < this.collectionSize; i += 1) {
            collection.push({
                number: randNumber(this.maxNum),
                property: ""
            });
        }
        this.collection = collection;
    }
    // отрисовка переданной коллекции, принимает в параметры коллекцию и селектор в документе
    render (collection, selector) {
        const wrap = document.querySelector(selector);
        const html = collection.reduce(
            (acc, { number, property}) => `${acc}<span style = "height:${number}px;" class = "${property}"></span>`, "",
        )
        wrap.innerHTML = html;
    }
    // рекусрсивный процесс прохода по коллекции для сортировки, исключительно, для внутреннего использования
    iterate (i, arr, size) {
        if (i !== (size - 1)) {
            arr[i].property = 'darkgreen';
            arr[i+1].property = 'darkgreen';
            this.render(arr, '#view_after');
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
                arr[i+1].property = 'darkgreen';
            }
            setTimeout(() => {
                i += 1;
                this.iterate(i, arr, size);
            }, this.sortSpeed/arr.length)
        }
    }
    // метод сортировки, так же итеративный
    sortCollection (size, count = 0) {
        if (count === this.collectionSize) return;
        this.iterate(0, this.collection, size);
        setTimeout(() => {
            count += 1;
            size -= 1;
            this.sortCollection(size, count);
        }, this.sortSpeed);  
    }  
}