function smallestPosition(array){
    let smaller = array[0];
    for (let index = 1; index < array.length; index +=1 ) {
        if (array[index] < smaller ) {
        smaller = index
      }
    }
    return smaller
    }
    console.log(smallestPosition([2, 4, 6, 7, 10, 0, -3]))