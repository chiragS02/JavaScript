
const secondLarget = (nums ) => {
    let res = nums[0];
    let max = nums[0];
    for (let i=1; i < nums.length; i++){
        if (nums[i] > max) {
            res = max;
            max = nums[i];
        }
        if (nums[i] > res && nums[i] != max) {
            res = nums[i]
        }
    }
    console.log(res);
}

secondLarget([1,2,3,5])