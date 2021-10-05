// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Test:

describe("cutShuffle", ()=>{
  
    it("Its a function that takes in an array, removes the first item from the array and shuffles the remaining content", ()=>{
 
        expect(cutShuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
        expect(cutShuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
})
})
//failed for all the right reasons

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
//Psuedocode:
//Step one is to create a function called cutShuffle that will take in an array. 
const cutShuffle = (array) => {
    //Next step is to have it return a new array with the 0th index removed. This took a couple tries, but after changing the index from 0 to 1 in . slice it worked. 
    let newArr = array.slice(1)
    // Once we've popped off the 1st index we want to shuffle the remainder of the array, after a couple of methods I found .sort() in MDN and that managed to shuffle it.
       return newArr.sort()
       // I used this one on both arrays in the MDN tool box and when I did a console.log here and in MDN, it worked, however. I was not able to get a pass on Jest because it was yelling at me for a comma on line "88". (btw.. no unexpected commas anywhere in sight)
}
//Failed for all the wrong reasons. 




// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.
describe("smallLarge", ()=>{
  
    it("Its a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order", ()=>{
        expect(smallLarge(nums1)).toEqual([-8, 90])
        expect(smallLarge(nums2)).toEqual([5, 109])
})
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

// // b) Create the function that makes the test pass.

//Psuedocode:
//First I need to create a function that is going to take in an array
const smallLarge = (array) =>  {
    //Then I'm going to use the filter function to map through my arrays and return the index I want
    //Then I'm going to use Math.Max() to return the largest index, and Math.min() to return the smallest index in my arrays.
return array.filter (value =>(Math.max(index), Math.min(index))
}
//I've messed around with adding another curly bracket to this and parentheses, but this curly bracket is showing up as an unexpected token in my jest tests.... but I need it...



// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.
describe("smoosh", ()=>{
  
    it("is a function that takes in two arrays as arguments and returns one array with no duplicate values", ()=>{
        expect(testArray1 = [3, 7, 10, 5, 4, 3, 3], testArray2 = [7, 8, 2, 3, 1, 5, 4]).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
     
})
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// // b) Create the function that makes the test pass.

//Psuedocode:
//So we need to make a function that takes in 2 arrays this time
const smoosh = (array1, array2) => {
    //Then we need to concat the two arrays in a way that will make this funciton dynamic.
    let newArr = array1.concat(array2);
    //we are going to send the array through a filter that will return the "true" values into our array. 
    //first it will go through and recognise the "item", at it's first "index" and the catch all will be if an item filters through and doesn't match the "index(of)" the first item, then it will return false and be booted from the array.
   newArr.filter((item, index) => {
        console.log(item, index, newArr.indexOf(item)newArr.indexOf(item) === index,
        );
       return newArr.indexOf(item) === index;
      });
      // I wish I could say it worked but it didn't and I ran out options because using the "unique()"function with the spread operator was a little out of my debth and I wasn't willing to plug in a function I didn't understand and couldn't explain.