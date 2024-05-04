//      Array Constructor accepts comma separated values
let names = new Array("Sultan", "Faizan", "Usman", "Arsalan");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//            How to Add Items to the Start of an Array
const fruitsArray = ["Mango", "Apple"];
fruitsArray.unshift("Orange", "Lemon", "Grape");
console.log(fruitsArray);
// The fruitsArray's invocation above will return:
// ["Orange", "Lemon", "Grape", "Mango", "Apple"]
//           How to Add Items to the End of an Array
const fruitsArrayList = ["Mango", "Apple"];
fruitsArray.push("Orange", "Lemon", "Grape");
console.log(fruitsArray);
// The fruitsArray's invocation above will return:
// ["Mango", "Apple", "Orange", "Lemon", "Grape"]
//                 How to Add Multiple Items to an Array
// Use splice() to add multiple items to an array.
// Define an array:
const colorsArray = ["red", "blue", "green", "white"];
// Add three items to the colorsArray:
colorsArray.splice(1, 0, "purple", "pink", "tan");
// Print colorsArray's content on the console:
console.log(colorsArray);
// The invocation above will return:
// ["red", "purple", "pink", "tan", "blue", "green", "white"]
console.log("sulttan");
Number.isInteger(578);
console.log(Number.isInteger);
// The invocation above will return: true
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var names1 = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names1[i]);
}
var arr = [12, 13];
var [x, y] = arr;
console.log(x);
console.log(y);
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
export {};
