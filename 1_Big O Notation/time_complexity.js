// O(1)

function aOperation(n) {
    return (n*2);
}

// O(n)

function GoingUpDown(n) {
    for (let i=0; i<n; i++){
        console.log(i);
    }
}
GoingUpDown(10)

// O(n^2)

function printBoth(n) {
    for (let i=0;i<n;i++){
        for (let j=0;j<n;j++){
            console.log(i,j);
        }
    }
}
printBoth(10)