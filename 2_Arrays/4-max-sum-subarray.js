
const maxSumSubarray = (nums) => {
    let sum = 0;
    let maxSum = nums[0];

    for (n of nums){
        sum = Math.max(n, sum+n);
        
        maxSum = Math.max(maxSum,sum);
    }
    console.log(maxSum);
    
}

maxSumSubarray([-1,-2,-3,-4])