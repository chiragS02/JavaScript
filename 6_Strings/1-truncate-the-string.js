function truncate(str, maxLen) {
    if (str.length > maxLen) {
        console.log(str.slice(0,maxLen)+"...");
    }
    else {
        console.log(str);
    }
}

truncate("Subscribe to RoadsideCoder", 9);