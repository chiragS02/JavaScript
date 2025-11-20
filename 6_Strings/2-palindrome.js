
function palindrome(str) {
    const res = str < 0 ? false : str === str.toString().split("").reverse().join("");
    console.log(res);
    
}

palindrome("mam")