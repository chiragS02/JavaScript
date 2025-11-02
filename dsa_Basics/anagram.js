const isAnagram = (a,b) => {
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
console.log(a===b);
}

isAnagram("abc","caba");