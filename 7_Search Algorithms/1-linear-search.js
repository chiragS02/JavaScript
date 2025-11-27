const linearSearch = (arr, target) => {

    for (let i=0; i< arr.length ; i++){
        if (arr[i] === target) {
            console.log(i);
        return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,5,4,7,9],10));
