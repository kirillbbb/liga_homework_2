//Задание 1
function sum(a) {
    let curSum = a;

    function insideFunc(b) {
        if (b !== undefined) {
            curSum += b;
            return insideFunc;
        }
        return curSum;
    }

    insideFunc.result = function() {
        return curSum;
    };

    return insideFunc;
}

console.log(sum(2)(3)(5).result());

//Задание 2
const str = 'one.two.three.four.five';

function strToObj(str) {
    const elements = str.split('.');
    const resultObj = {};

    let curLevel = resultObj;

    for (let elem of elements) {
        curLevel[elem] = {};
        curLevel = curLevel[elem];
    }

    return resultObj;
}

console.log(strToObj(str)); //не совсем правильно выводит

console.log(JSON.stringify(strToObj(str),null,1));