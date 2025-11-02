
const fib = (n) => {
    const arr = [0,1];

    for (let index = 2; index <= n; index++) {
        arr.push(arr[index-1]+ arr[index-2]);
    }
    console.log(arr);
}

fib(5);