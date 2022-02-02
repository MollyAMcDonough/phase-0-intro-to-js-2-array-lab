// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name) {
    return [name,...cats];
}

function removeLastCat() {
    return cats.slice(0,-1);
}

function removeFirstCat() {
    return cats.slice(1);
}
