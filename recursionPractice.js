function sumToForLoop (num) {

    let sum = 0;
    for (let i = 0; i < num + 1 ; i++) {
        sum += i;
    }
    console.log(sum);
}

// sumToForLoop(10);

function sumToForRecursion(num) {


    if (num == 1) {
        return num;
        
    } else {
        return num + (sumToForRecursion(num - 1));
    }
    
}

// console.log(sumToForRecursion(10000));

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

// console.log(sumToForAriPro(10));

function factorial(num) {

    if (num == 1) {
        return num;
    } else {
        return num * (factorial(num - 1));
    }
}

// console.log(factorial(5));

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

// console.log(fib(100));

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

// console.log(fibsRec(10));



let unsortedArray = [2, 9, 8, 4, 343, 85, 5, 7];



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
// console.log(mergeSort(unsortedArray));


// Extra Assignment : For more attempts at recursion try the first 5 problems in Project Euler

function threeOrFive (n) {

    if (n == 3) {
        return n;
    }

    if (n % 3 == 0 || n % 5 == 0) {
        return n + (threeOrFive(n - 1)); 
    } else {
        return (threeOrFive(n - 1));
    }


}

// console.log(threeOrFive(999));

// My solution
function evenFib(n) {

    if (n == 2) {
        return [1, 2, 2];
    } else {
        let arrayPrev = evenFib(n - 1);
        let currentFibVal = arrayPrev[0] + arrayPrev[1];
        arrayPrev[0] = arrayPrev[1];
        arrayPrev[1] = currentFibVal;

        if (currentFibVal % 2 == 0 && currentFibVal < 4000000) {
            arrayPrev[2] += currentFibVal;
        }

        return arrayPrev;
    }

}

// Chat-GPT Solution
function evenFibRecursive(a, b, limit) {
    let nextFib = a + b;

    if (nextFib > limit) {
        return 0;  // Base case: If the next Fibonacci number exceeds limit, return 0.
    }

    // If nextFib is even, add it to the sum. Otherwise, add 0.
    return (nextFib % 2 === 0 ? nextFib : 0) + evenFibRecursive(b, nextFib, limit);
}

// console.log(evenFib(40)[2]);
// console.log(2 + evenFibRecursive(1, 2, 4000000));


function isPrime (n) {

    if (n <= 1) {
        return false;  // 0 and 1 are not prime numbers
    }

    if (n == 2 || n == 3) {
        return true;
    }

    if (n % 2 == 0 || n % 3 == 0) {
        return false;  // multiples of 2 and 3 are not primes
    }
    
    let i = 5;
    while (i * i <= n) {
        if (n % i == 0 || n % (i + 2) == 0)  // This checks for divisibility by numbers in the format 6k ± 1
            return false;
        i += 6;
    }

    return true;
}


function largestPrimeFactor(n) {

    let highestPrimeFactor = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime(i) && (n % i == 0)) {
            highestPrimeFactor = i;
        } 
    }

    return highestPrimeFactor;
}


// console.log(largestPrimeFactor(600851475143));

// Chat GPT Solution
function largestPrimeFactorRecursive(n, divisor = 2) {

    if (isPrime(n)) return n;  // If n is prime, then it is its own largest prime factor
    
    if (n % divisor == 0 && isPrime(divisor)) {
        return Math.max(divisor, largestPrimeFactor(n / divisor, divisor));
    }

    return largestPrimeFactor(n, divisor + 1);
}

// My understanding: 
// This code will recurse the value n until it is divisible by the divisor, in this case when i = 71 and when n = 8462696833 OR 600851475143/71
// at this point, the function will call itself with the new values, whereby the new number n has to be divisible by the divisor AND
// see if the divisor itself is a prime number
// If not a prime number, lPF will continue to increase the value of the divisor by 1, until it has reached the point where the value that is left is indeed a prime number.

// console.log(isPrime(6857))
// console.log(largestPrimeFactorRecursive(600851475143));

function isNumberPalindrome (n) {

    let numStr = n.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
    
    // Initial implementation below:
    // let numStr = n.toString()

    // let middleIndex = Math.floor(numStr.length / 2);

    // if (numStr.length % 2 == 0) {
    //     for (let i = 0; i <= middleIndex; i++) {
    //         if (numStr[i] != numStr[numStr.length - i - 1]) {
    //             return false;
    //         } 
    //     }
    // }

    // if (numStr.length % 2 != 0) {
    //     for (let i = 0; i < middleIndex; i++) {
    //         if (numStr[i] != numStr[numStr.length - i - 1]) {
    //             return false;
    //         } 
    //     }
    // }

    // return true;

} 

// console.log(isNumberPalindrome(12421))

function largestPalindromeProductRecursion (num1, num2, largest) {

    let n = num1 * num2;

    // Set the new largest Palindrome to the value largest
    if (isNumberPalindrome(n) ) {
        largest = Math.max(n, largest)
    }

    // Base case
    if (num1 < 100) {
        return largest;
    }

    // If num2 reaches its lower bound, decrement num1 and reset num2 to 999 i.e; num1 goes from 999 -> 998... and so on. num2 restarts to 999
    if (num2 == 100) {
        return largestPalindromeProductRecursion(num1 - 1, num1, largest);
    }

    // Decrement num 2 from 999 -> 100
    return largestPalindromeProductRecursion(num1, num2 - 1, largest);
}


function largestPalindromeProduct() {
    let largest = 0;

    let finalNum1 = 0;
    let finalNum2 = 0;

    for (let num1 = 999; num1 >= 100; num1--) {
        for (let num2 = 999; num2 >= 100; num2--) {
            let n = num1 * num2;

            if (isNumberPalindrome(n)) {

                if (n >= largest) {
                    finalNum1 = num1;
                    finalNum2 = num2;
                }

                largest = Math.max(n, largest);
                
            }

        }
    }

    return [largest, finalNum1, finalNum2];
}

// console.log(largestPalindromeProduct());
// console.log(largestPalindromeProductRecursion(999, 999, 0));


function smallestMultipleRecursion (n = 20) {

    // Checks if the number is divisible by all numbers from 1 to 20.
    function isDivisible(num) {
        for (let i = 11; i <= 20; i++) {
            if (num % i !== 0) return false;
        }
        return true;
    }

    if (isDivisible(n)) return n;

    // Increment by 20 since the result must be a multiple of 20.
    return smallestMultipleRecursion(n + 20);
}

// console.log(smallestMultipleRecursion());

function smallestMultiple(n = 20) {

    let smallestValue = 0;

    while(smallestValue == 0) {

        for (let i = 11; i <= 20; i++) {
            if (n % i !== 0) {
                n += 20;
                break;
            }

            if (i == 20 && n % i === 0) {
                smallestValue = 1;
            }
        }
    }

    return n;
}

console.log(smallestMultiple());