// const twoSum = (arr, t) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j=i+1; j< arr.length; j++){
//             if(arr[i]+arr[j] === t) return [i,j];
//         }
//     }
// }

const twoSum = (arr, t) => {
    var obj = {};
    
    for(let i=0; i< arr.length; i++){
        var n = arr[i];

        if (obj[t-n] >= 0){
            return [obj[t-n],i];
        }else {
            obj[n] = i;
        }
    }
}

console.log(twoSum([1,2,3,4],7));
