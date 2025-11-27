const kthMissingNum = (arr, k) => {
    let count = 0;
    let num = 1;
    let i = 0;

    while (true) {
        if (i < arr.length && arr[i]===num) {
            i++;
        } else {
            count++;
            if (count === k) {
                return num;
            }
        }
        num++;
    }
}

console.log(kthMissingNum([2, 3, 4, 7, 11],6));
