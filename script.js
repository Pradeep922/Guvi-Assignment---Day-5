// Print odd numbers in an array

//Normal Function
const numbers = [1, 2, 3, 4, 5];

const isOdd = function (array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

const oddArray = isOdd(numbers);
console.log(oddArray);

// Arrow Function
// const numbers = [1, 2, 3, 4, 5];

// const isOdd =  (array, oddArr = []) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArr.push(array[i]);
//     }
//   }
//   return oddArr;
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);



// Sum of all numbers in an array
const array = [1, 2, 3, 4]; 
let sum = 0; 
for (let i = 0; i < array. length; i++) { 
  sum += array[i]; 
} console. log(sum);

// Return all the prime numbers in an array
var Primenumber = [2, 3, 4, 5, 6, 7, 8, 9, 10]

Primenumber = Primenumber.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(Primenumber);

// Convert all the strings to title caps in a string array
let FirstName = "Pradeep";
let LastName = "Raj";

const FullName = [FirstName.toUpperCase(), LastName.toUpperCase()].join(" ");
console.log(FullName);

// Return all the palindromes in an array
const arr = [1221, 234324, 343434343, "Hello", "Welcome"];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

// Remove Duplicates from an Array.
var Duplicates =[1,1,2,2,3,3,4,4,5,5,6,7,7,8,8];
var temp =Duplicates[0];
for (var i = 0; i < Duplicates.length; i++){
  temp=temp^Duplicates[i];
}
console.log(temp);

