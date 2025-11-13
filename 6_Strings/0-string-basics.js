
const string = new String("A new string");

const quotes = "String";

const backTicks = `String`;

const templateLiteral = `Sting ${string}`;

console.log`hello ${string}`

function taggedLiteral(string, person) {
    console.log(string, person);
    return;
}

const len = string.length;

// Accessing chars
string[2];
string.charAt(2);

// Modifying
string[2] = 'c';
string.replace('s','b');
string.replaceAll('s','b');

string.concat(" and a concat");
const newStr = "      Hello        ";
newStr.trim(); // removes space in start and end

string.indexOf("new");

string.lastIndexOf("s");
string.indexOf("e");

// Extracting Substrings
string.substring(3,6);
string.slice(-8,-1);

string.toUpperCase();
string.toLowerCase();

string.includes("new");

// splitting and join
string.split("e");

const arr = ["A","B"];
arr.join(" and ");