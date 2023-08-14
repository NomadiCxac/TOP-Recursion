function sumToForLoop (num) {

    let sum = 0;
    for (let i = 0; i < num + 1 ; i++) {
        sum += i;
    }
    console.log(sum);
}

sumToForLoop(10);

function sumToForRecursion(num) {


    if (num == 1) {
        return num;
        
    } else {
        return num + (sumToForRecursion(num - 1));
    }
    
}

console.log(sumToForRecursion(10000));

function sumToForAriPro(num) {

    let d = 1;
    let a = 1;

    // My Solution
    // if (num == 1) {
    //     return num;
    // } else {
    //     return (a + ((num - 1)*d) + sumToForRecursion(num - 1))
    // }

    return num * (num + 1) / 2;

}

console.log(sumToForAriPro(10));

function factorial(num) {

    if (num == 1) {
        return num;
    } else {
        return num * (factorial(num - 1));
    }
}

console.log(factorial(5));

function fib (num) {

    fib1 = 1;
    fib2 = 1;

    // fib3 is equal to fib 1 + fib 2
    for (let i = 3; i <= num; i++) {
        let latestFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = latestFib;
    }
    return fib2;
}

console.log(fib(100));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printListLoop(listObject) {

    let tempList = listObject;

    // while NOT Null
    while (tempList) {
        alert(tempList.value);
        tempList = tempList.next;
    }

}

function printListRecursion (listObject) {

    alert (listObject.value);

    if (listObject.next) {
        printListRecursion(listObject.next);
    }
}

// printListLoop(list);
// printListRecursion(list);


function printListLoopAlt (listObject) {

    let tempList = listObject;
    let valueArray = [];

    while (tempList) {
        valueArray.push(tempList.value)
        tempList = tempList.next;
    }
    
    for (let i = valueArray.length - 1; i >= 0; i--) {
        alert(valueArray[i]);
    }
}

function printListRecursionAlt (listObject) {

    // The execution context will step into the PrintListRecursionAlt function 4 times (in this case when .next = null) 
    if (listObject.next) {
        printListRecursionAlt(listObject.next);
      }

    // and then alert the current value, before being popped off the call stack
    
      alert(listObject.value);
}

// printListLoopAlt(list);
// printListRecursionAlt(list);

function powerRecursion (x, n) {

    if (n == 1) {
        return x;
    } else {
        return x * (powerRecursion(x, n - 1))
    }
}

// console.log(powerRecursion(2, 3));

var allAreLessThanSeven = all([1,2,9,4], function(num){
	return num < 7;
});

function all(array, cb) {

    let tmp = array;
    
    if (array.length === 0) {
        return true;
    }

    if (cb(tmp[0])) {
        array.shift();
        return all(array, cb);
    } else {
        return false;
    }
}

// console.log(allAreLessThanSeven);

function productOfArray(array) {

    let tmp = array;
    let accumulator = array[0];

    if (array.length === 1) {
        return accumulator;
    } else {
        array.shift();
        return accumulator * productOfArray(array);
    }
}

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

// console.log(six);

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(object, valueExists) {

    for (key in object) {

        if (key == valueExists) {
            return true;
        }

        if (typeof object[key] === 'object') {
            return contains(object[key], valueExists);
        }

        if (object[key] == valueExists) {
            return true;
        }

    }

    return false;       
}

// console.log(hasIt);
// console.log(doesntHaveIt)
// console.log(contains(nestedObject, "info"))

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(array) {
    
    if (array.length === 0) {
        return 0;
    }

    let accumulator = 0;

    if (Array.isArray(array[0])) {
        accumulator += totalIntegers(array[0]);
    }
    
    else if (typeof(array[0]) === 'number') {
        accumulator += 1;
    }

    array.shift();
    return accumulator + totalIntegers(array);
}


function SumSquares (array) {

    if (array.length === 0) {
        return 0;
    }

    let accumulator = 0;
    let square = 0;

    if (Array.isArray(array[0])) {
        accumulator += SumSquares(array[0]);
    }
    
    else if (typeof(array[0]) === 'number') {
        square = array[0] * array[0];
        accumulator += square;
    }

    array.shift();
    return accumulator + SumSquares(array);
}

var test1 = [1,2,3]; 
var test2 = [[1,2],3]; 
var test3 = [[[[[[[[[1]]]]]]]]] 
var test4 = [10,[[10],10],[10]] 
// console.log(SumSquares(test1)); 
// console.log(SumSquares(test2)); 
// console.log(SumSquares(test3)); 
// console.log(SumSquares(test4)); 

function replicate(numberOfListItems, itemValue) {
    if (numberOfListItems <= 0) {
        return [];
    }

    let result = replicate(numberOfListItems - 1, itemValue);
    result.push(itemValue);

    return result;
}


// console.log(replicate(3, 5));  
// console.log(replicate(1, 69)) 
// console.log(replicate(-2, 6)) 

function iterFibs (n) {

    let array = []
    
    for (let i = 0; i < n; i++) {


        let currentValue = 0;
        
        if (i === 0) {
            currentValue = 0;
            array.push(currentValue);
        }

        if (i === 1) {
            currentValue = 1;
            array.push(currentValue);
        }

        if (i >= 2) {
            currentValue = (array[i - 2] + array[i - 1]);
            array.push(currentValue);
        }
    }

    return array;
}

// console.log(iterFibs(8));

function fibsRec (n) {

    // base case
    if (n == 2) {
        return [0, 1]
    } else {
        let arrayPrev = fibsRec(n - 1);
        let currentFibVal = arrayPrev[n - 2] + arrayPrev[n - 3];
        arrayPrev.push(currentFibVal);
        return arrayPrev
    }
    

}

console.log(fibsRec(10));

let unsortedArray = [2, 9, 8, 4, 343, 85, 5, 7];
// let unsortedArray = [2, 9, 4, 8];

function splitArrayInHalf(array) {
    let midpoint = Math.ceil(array.length / 2); // Using Math.ceil ensures that if the length is odd, the first half will have one more element than the second half.

    let leftSide = array.slice(0, midpoint);
    let rightSide = array.slice(midpoint);

    return [leftSide, rightSide];
}

function merge(leftArray, rightArray) {

    let newArray = [];

    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] < rightArray[rightPointer]) {
            newArray.push(leftArray[leftPointer]);
            leftPointer++;
        } else {
            newArray.push(rightArray[rightPointer]);
            rightPointer++;
        }
    }

    // Handle any leftover elements in the left array
    while (leftPointer < leftArray.length) {
        newArray.push(leftArray[leftPointer]);
        leftPointer++;
    }

    // Handle any leftover elements in the right array
    while (rightPointer < rightArray.length) {
        newArray.push(rightArray[rightPointer]);
        rightPointer++;
    }

    return newArray;
}


function mergeSort(array) {

    // base case 
    if (array.length == 1) {
        return array;
    }

    let leftSide = (splitArrayInHalf(array)[0]);
    let rightSide = (splitArrayInHalf(array)[1]);


    let sortedLeft = mergeSort(leftSide);
    let sortedRight = mergeSort(rightSide)


    return orderedArray = merge(sortedLeft, sortedRight);
}

// let leftTest = (splitArrayInHalf(unsortedArray)[0])
// let rightTest = (splitArrayInHalf(unsortedArray)[1])
// console.log(leftTest)
// console.log(rightTest)
// console.log(merge(leftTest, rightTest));
console.log(mergeSort(unsortedArray));