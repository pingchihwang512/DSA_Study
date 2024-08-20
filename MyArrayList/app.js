'use strict';

// Constructor Function
var MyArrayList = function () {
    this.data = [];
    this.size = 0;
    this.INIT_CAP = 1;
    this.init(arguments[0]);
};

// Initialization method
MyArrayList.prototype.init = function (initCapacity) {
    let capacity = initCapacity || this.INIT_CAP;
    this.data = new Array(capacity);
    this.size = 0;
}

// Create
MyArrayList.prototype.addLast = function (e) {
    let cap = this.data.length;

    if (this.size === cap) {
        this.resize(2 * cap); // Expansion
    }
    this.data[this.size] = e;
    this.size++;
};

// Insert 
MyArrayList.prototype.add = function (index, e) {
    this.checkPositionIndex(index);

    let cap = this.data.length;

    if (this.size === cap) {
        this.resize(2 * cap); // Expansion
    }

    for (var i = this.size - 1; i >= index; i--) {
        this.data[i + 1] = this.data[i];
    }

    this.data[index] = e;

    this.size++;
};

// Insert first
MyArrayList.prototype.addFirst = function (e) {
    this.add(0, e);
}

// Delete
MyArrayList.prototype.removeLast = function () {
    if (this.size === 0) {
        throw new Error("NoSuchElementException");
    }

    let cap = this.data.length;

    if (this.size === Math.floor(cap / 4)) {
        this.resize(Math.floor(cap / 2));
    }

    let deletedVal = this.data[this.size - 1];
    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
};

MyArrayList.prototype.remove = function (index) {
    this.checkElementIndex(index);

    let cap = this.data.length;

    if (this.size === Math.floor(cap / 4)) {
        this.resize(Math.floor(cap / 2));
    }

    let deletedVal = this.data[index];

    for (var i = index + 1; i < this.size; i++) {
        this.data[i - 1] = this.data[i];
    }

    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
};

MyArrayList.prototype.removeFirst = function () {
    return this.remove(0);
}

// Read
MyArrayList.prototype.get = function (index) {
    this.checkElementIndex(index);

    return this.data[index];
};

// Update
MyArrayList.prototype.set = function (index, element) {
    this.checkElementIndex(index);

    let oldVal = this.data[index];
    this.data[index] = element;
    return oldVal;
};

// Show length
MyArrayList.prototype.size = function () {
    return this.size;
};

// Check empty
MyArrayList.prototype.isEmpty = function () {
    return this.size === 0;
}

// Resize
MyArrayList.prototype.resize = function (newCap) {
    let temp = new Array(newCap);

    for (let i = 0; i < this.size; i++) {
        temp[i] = this.data[i];
    }

    this.data = temp;
};

MyArrayList.prototype.isElementIndex = function (index) {
    return index >= 0 && index < this.size;
};

MyArrayList.prototype.isPositionIndex = function (index) {
    return index >= 0 && index <= this.size;
}

// Check if its ok to have an element at index
MyArrayList.prototype.checkElementIndex = function (index) {
    if (!this.isElementIndex(index)) {
        throw new Error("Index: " + index + ", Size:" + this.size);
    }
};

// Check if its ok to insert element at index 
MyArrayList.prototype.checkPositionIndex = function (index) {
    if (!this.isPositionIndex(index)) {
        throw new Error("Index: " + index + ", Size:" + this.size);
    }
};

MyArrayList.prototype.display = function () {
    console.log("size = " + this.size + " cap = " + this.data.length);
    console.log(this.data);
};

let arr = new MyArrayList(3);

for (let i = 1; i < 5; i++) {
    arr.addLast(i);
}

arr.remove(3);
arr.add(1, 9);
arr.addFirst(100);
let val = arr.removeLast();

for (let i = 0; i < arr.size; i++) {
    console.log(arr.get(i));
}