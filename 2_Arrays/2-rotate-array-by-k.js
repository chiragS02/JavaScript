
const rotateArray = (arr, k) => {
    let size = arr.length;
    if (size > k) {
        k = k%size;
    }
    reverse(arr, 0 , arr.length-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, arr.length-1);
    console.log(arr);
}
function reverse(arr,left, right) {
    while (left < right) {
        const temp =arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
}

rotateArray([1,2,3,4],2);

const rotatedArr = (arr, k) => {
    let len = arr.length;
    if (k > len) {
        k = k%len;
    }
    const rotated = arr.splice(len - k, len);
    arr.unshift(...rotated);
    console.log(arr);
}
rotatedArr([1,2,3,4],2)