// decleration
let person = {name:"abc",age:10}
let arr = ["a","b","c", person];
console.log(arr);

// Add t end of array
arr.push("d");

// Remove from end of array
arr.pop();

// Add to Top of Array
arr.unshift("d");

// Remove from top of array
arr.shift();

// Looping arrays
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// While loop
let i=0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Inbuilt loop methods
const numbers = [1,2,3,4];

// map
const n =numbers.map((item) => {
    return item*2
})
console.log(n);

// filter
const filteredNum = numbers.filter((item) => {
    return item%2 == 0;
});
console.log(filteredNum);

// reduce
const reducedNum = numbers.reduce((prev,item) => {
    return prev+item;
},2)
console.log(reducedNum);

// Some 
const someNum = numbers.some((item) => {
    return item > 3;
});
console.log(someNum);

// Every
const everyNum = numbers.every((item) => {
    return item <10;
})
console.log(everyNum);

// Find
const findNum = numbers.find((item) => {
    return item < 3;
})
console.log(findNum);

// Find index
const indexNum = numbers.findIndex((item) => item ===4);
console.log(indexNum);

const nums1 = [1,2,3];
const nums2 = [4,5,6];

// Spread 
const allNums = [...nums1, ...nums2];
console.log(allNums);

// Rest 
function sum(...allNums) {
    return allNums;
}
console.log(sum(nums1,nums2,5, "hello"));

// Concat
const concatNum = nums1.concat(nums2);
console.log(concatNum);

// Slice
const sliceNum = allNums.slice(2)
console.log(sliceNum);

// Splice
const spliceNum = nums1.splice(1,1, 10);
console.log(spliceNum);

// Flat
const flat = [1,[2,3],[4]];
const flatNums = flat.flat();
console.log(flatNums);

// Reverse
const reverseNums = numbers.reverse();
console.log(reverseNums);
