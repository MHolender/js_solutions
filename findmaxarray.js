// Challenge: Build a function findMax() which takes an array and 
// returns the maximum number.


var goodArray = [-1, -1, 0, -12, 3, 6, 6, 31];

function findMax (myArray) {
    var subArray, i, j, solution;
    function removeElement(array, element) { //returns new array without element
        return array.filter( function (value) { return value !== element; } );
    }
    maxTest:
    for (i=0; i<myArray.length; i++) {
        subArray = removeElement(myArray, myArray[i]);
        if (subArray.length === 0) { // all values in myArray are equal so they're all max
            solution = myArray[0];
            break;
        }
        for (j=0; j<subArray.length; j++) {
            if (myArray[i] < subArray[j]) {
                continue maxTest; // value in myArray is not max, continue to next value
            } // otherwise we'll loop to next value in subArray
        }
        // if it iterated thru whole subArray and found none greater, we have
        // found our max value.
        solution = myArray[i];
        break;
    }
    return solution;
}

console.log(findMax(goodArray)); // 31
