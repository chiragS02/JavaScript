
const palindrome = (x) => {
    return x === +x.toString().split("").reverse().join("");
}

const result = palindrome(131);
console.log(result);

