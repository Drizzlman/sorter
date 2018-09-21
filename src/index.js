class Sorter {
    constructor() {
        this.Array = [];
        this.Compare = (left, right) => left - right;
    }

    add(element) {
        this.Array.push(element);
    }

    at(index) {
        return this.Array[index];
    }

    get length() {
        return this.Array.length;
    }

    toArray() {
        return this.Array;
    }

    sort(indices) {

        var SortedArray = [];
        var SortedInd = indices.sort((left, right) => left - right);
        for (var i = 0, length = SortedInd.length; i < length; i++) {
            SortedArray.push(this.Array[SortedInd[i]]);
        }
        SortedArray.sort(this.Compare);
        for (var i = 0, length = SortedInd.length; i < length; i++) {
            this.Array[SortedInd[i]] = SortedArray.shift();
        }
    }


    setComparator(compareFunction) {
        this.Compare = compareFunction;
    }
}

module.exports = Sorter;
