var count = 0;

function increaseCount(val) {
    count += val;
}

function getSomething() {
    return count > 0;
}

console.log(increaseCount(10));
console.log(getSomething());