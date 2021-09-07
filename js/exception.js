// const myObj = [1, 2];
// myObj.map((h) => console.log(h));
// const myObj = {a: 1, b: 2};
// myObj.map((h) => console.log(h));
// throw your own exception
// throw "new error!";

// function checkIfNum(n) {
//     if (isNaN(n)) {
//         throw "this is nos a number";
//     } else {
//         console.log(n);
//     }
// }
// checkIfNum("hol");

const myObjException = {
    toString: function() {
        return "I am an object exception"
    }
}

function myException(message) {
    this.message = message;
    this.name = "My exception";
    this.toString = function() {
        return this.name + " " + this.message;
    }
}

// const exception = new myException("hi");
// console.log(exception);

// throw new myException("Field invalid");

// try ... catch

// try {
//     throw "Exception";
// } 
// catch(e) {
//     console.log(e)
// }

let myNum = "un";
// console.log(isNaN(myNum));
function ckeckIfNum(num) {
    if (isNaN(num)) {
        throw "not a number";
    } else {
        console.log("Yes, this is a number");
    }
}
// ckeckIfNum("string");
// console.log("hola");
const myErrorLog = [];
function errorHandler(e) {
    myErrorLog.push(e);
}

try {
    ckeckIfNum(myNum);
}
catch(catchID) {
    // console.log("Caught an error:", catchID);
    errorHandler(catchID);
}
console.log(myErrorLog.length);

function MyString(string) {
    if (typeof string === "string"){
        this.value = string;
        this.getValue = function() {
            return "your string: " + this.value + ".";
        }
    } else {
        throw new StringExceptionError(string);
    }
}
function StringExceptionError(value) {
    this.value = value;
    this.message = "function requieres a string";
    this.toString = function() {
        return this.value + ": " + this.message;
    }
}

function verifyString(s) {
    let str;
    try{
         str = new MyString(s);
    }
    catch(e) {
        if (e instanceof StringExceptionError) {
            console.log("String exception:" + e);
        } else {
            console.log("Other exception");
        }
    }
    finally {
        console.log("Always runs");
    }
    return str;
}
const a = verifyString("i am s string");
console.log(a);
console.log(a.getValue());
const b = verifyString(true);