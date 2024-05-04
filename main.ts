//      Array Constructor accepts comma separated values

let names:string[] = new Array("Sultan","Faizan","Usman","Arsalan") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
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
