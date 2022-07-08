let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a, b){
    return (a-b) * -1 ;
})
console.log(numbers);