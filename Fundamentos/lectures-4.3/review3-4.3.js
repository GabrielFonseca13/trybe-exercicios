let array = ['java', 'javascript', 'python', 'html', 'css'];
    for (let index = 0; index < array.length; index+= 1) {
      if (array[index].length > array[index + 1].length) {
        console.log(array[index].length)
        console.log(array[index]);
        biggestWord = array[index]
        console.log(biggestWord);
      }
        
    }