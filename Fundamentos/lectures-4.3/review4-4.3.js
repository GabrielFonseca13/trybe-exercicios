let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallestWord = array[0]
    for (let index = 1; index < array.length; index+= 1) {
        if(smallestWord.length > array[index].length){
            smallestWord = array[index]
        }   
        console.log(smallestWord);
    }
    console.log('A menor palavra é: ' + smallestWord)