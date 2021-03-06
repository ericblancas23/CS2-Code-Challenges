/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
*/


// Write a function called firstItem that passes the first item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

<<<<<<< HEAD
firstItem(foods, (firstItem, cb) => { 
  return cb(foods[0]); 
=======
firstItem(foods, (firstItem) => {
>>>>>>> 20a23e650b13f650a1ea3eba2f463dedcd13e115
  console.log(`The first item is ${firstItem}.`);
});

// Write a function called getLength that passes the length of the array into the callback

<<<<<<< HEAD
getLength(foods, (length, cb) => {
  return cb(foods.length);
=======
getLength(foods, (length) => {
>>>>>>> 20a23e650b13f650a1ea3eba2f463dedcd13e115
  console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback

<<<<<<< HEAD
last(foods, (lastItem, cb) => {
  return cb(foods[6]);
=======
last(foods, (lastItem) => {
>>>>>>> 20a23e650b13f650a1ea3eba2f463dedcd13e115
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback


<<<<<<< HEAD
sumNums(5, 10, (sum, cb) => { 
  return cb(5+10); 
=======
sumNums(5, 10, (sum) => {
>>>>>>> 20a23e650b13f650a1ea3eba2f463dedcd13e115
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

<<<<<<< HEAD
multiplyNums(5, 10, (product) => { 
  return cb(5*10); 
=======
multiplyNums(5, 10, (product) => {
>>>>>>> 20a23e650b13f650a1ea3eba2f463dedcd13e115
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.


forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});