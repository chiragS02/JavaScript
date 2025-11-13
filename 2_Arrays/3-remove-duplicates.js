
const removeDup = (nums) => {
    for (let i=0; i< nums.length-1; i++){
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
        }
    }
    console.log(nums);
    
}

removeDup([1,1,2,2,3,5,6,6]);

const removeDuplicates = (nums) => {
    let i=0;
    for (let j=1; j< nums.length-1; j++){
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(i+1);
    
}
removeDuplicates([1,1,2,3,4,4])