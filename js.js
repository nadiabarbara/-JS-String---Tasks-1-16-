'use strict'

// Task 1
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
console.log(bio.length);

// Task 2
const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
const char = prompt("enter num of char in string:");
if (isNaN(char)){
    console.log("Not Number");
}
else {
    console.log(`char #${char} is: "${str.charAt(char)}"`);
}

// Task 3
const strA = prompt("enter a string:");
console.log("Last char is " + strA.charAt(strA.length-1));
console.log("char is " + strA.charAt(strA.length-2));

// Task 4
const str1 = 'abcde';
let reversed = '';
for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log("Reversed string:", reversed); 

// Task 5
const str2 = "js";
console.log(str2.toUpperCase());

// Task 6
const str3 = ' It is a long established fact that a reader wil be distracted by the readable content of a page when looking at its layout.';
const strToSearch = prompt("Enter text for search: ");
console.log(str3.includes(strToSearch));


// Task 7
let strNum = '1-2-3-4-5';
const  n = '-';
while (strNum.includes(n)){
    strNum = strNum.replace(n, '.');
}
console.log(strNum);

// Task 8
let strN = '1-2-3-4-5';
const charToReplace = '-'
let newStr = strN.replaceAll(charToReplace, ".");
console.log(newStr);

// Task 9
const str4 = 'sdfwe'
console.log(str4.substring(4,2)); // fw

// Task 10
const str5 = "I'm learning javascript!";
// Using substr
const Substr = str5.substr(0, 3); 
console.log(Substr); 

// Using substring
const Substring = str5.substring(0, 3); 
console.log(Substring); 

// Using slice
const Slice = str5.slice(0, 3);
console.log(Slice); 

// Task  11
const strB = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
const startsWithHttp = strB.indexOf('http://') === 0;
console.log(startsWithHttp);

// Task 12
const strC = 'https://www.notion.html'
const substr = '.html'
console.log(strC.indexOf('.html') === strC.length - substr.length);

// Task 13
const strD = 'ab cd cd cd ef'
console.log(strD.lastIndexOf('cd')); //   9 
console.log(strD.lastIndexOf('cd', 8)); //   6

// Task 14
const strE= 'abcde';

console.log(strE.startsWith('abc')); // true
console.log(strE.startsWith('xxx')); // false
console.log(strE.startsWith('bc', 1)); // true

// Task 15
const strF = 'abcde';

console.log(strF.endsWith('cde')); // true
console.log(strF.endsWith('xxx')); // false
console.log(strF.endsWith('bc', 3)); // true

// Task 16
let strG = 'ab-cd-ef';
console.log(strG.split('-'));  // Output: ['ab', 'cd', 'ef']
console.log(strG.split('-', 2)); // Output: ['ab', 'cd']
console.log(strG.split('')); // Output: ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(strG.split('', 3)); // Output: ['a', 'b', '-']

let strH = '12345';
console.log(strH.split('')); // Output: ['1', '2', '3', '4', '5']