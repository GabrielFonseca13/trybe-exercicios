
function biggestPosition(numbers) {
    let bigger = numbers[0]
    for (let index = 1; index < numbers.length; index += 1) {
        if (numbers[index] > bigger) {
         bigger = index    
        }
    }
    return bigger;    
}
console.log(biggestPosition([2 , 3 , 6 , 7 , 10 , 1]));
