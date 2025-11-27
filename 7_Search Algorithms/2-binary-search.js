const binarySearch = (arr,  target) => {
    const n = arr.length-1;
    let left = 0;
    let right = n;

    while (left <= right) {
        let mid = Math.floor(right-left /2)
        if (arr[mid] === target) {
            return mid;
        }
        if (target > arr[mid]) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,9], 5));
