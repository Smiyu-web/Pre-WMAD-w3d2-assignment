// write a function that takes the last item of the second array, 
// and adds it to the end of the first array.
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];      

const addTheLast = function (arr1, arr2) {
    arr1.push(arr2[3]);
    console.log(arr1);
};

addTheLast(food, numbers);
