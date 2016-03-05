export class PriorityQueue {
    constructor(order = "min", f = x=>x) {
        this.order = order;
        this.f = f;
        this.A = [];
    }

    push(element) {
        binaryInsert(element, this.A);
    }

    len() {
        return this.A.length;
    }

    pop() {
        if (this.order == "min") {
            return this.A.shift();
        }
        else {
            return this.A.pop();
        }
    }


}

function binaryInsert(value, array, startVal, endVal) {

    var length = array.length;
    var start = typeof(startVal) != 'undefined' ? startVal : 0;
    var end = typeof(endVal) != 'undefined' ? endVal : length - 1;
    var m = start + Math.floor((end - start) / 2);

    if (length == 0) {
        array.push(value);
        return;
    }

    if (value > array[end]) {
        array.splice(end + 1, 0, value);
        return;
    }

    if (value < array[start]) {//!!
        array.splice(start, 0, value);
        return;
    }

    if (start >= end) {
        return;
    }

    if (value <= array[m]) {
        binaryInsert(value, array, start, m - 1);
        return;
    }

    if (value > array[m]) {
        binaryInsert(value, array, m + 1, end);
        return;
    }

}