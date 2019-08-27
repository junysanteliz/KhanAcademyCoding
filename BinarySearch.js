/* Returns either the index of the location in the arry, or -1 if the
array did not contain the value stored in the variable "targetValue" */

var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var counter = 0;
    while(max >= min) {
        counter++;
        guess = Math.floor((min + max)/2);
        console.log(guess);
        if(array[guess] === targetValue) {
            console.log(counter);
            return guess;
        }
        else if(array[guess] < targetValue) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);


