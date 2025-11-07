// O(1)

const funnyNu = (arr) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
       sum += arr[index]; 
    }
    return sum;
};


// O(n)

const funnyNumArray = (n) => {
    const arr = [];
    for (let index = 0; index < n; index++) {
      arr.push(index)
    }
}

// O(n^2)

const createMatrix = (n,m) => {
    let matrix = [];
    for (let i=0;i < n; i++){
        for (let j=0; j<m; j++){
            matrix[i][j] = i+j;
        }
    }
    return matrix;
}