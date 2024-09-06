function oddAverage(numbers){
    let sum=0, count=0;

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index]%2!==0) {
            sum+=numbers[index];
            count++;
        }
    }
    const avg = sum/count;
    console.log('Average ',avg);
    console.log('Sum ',sum);

    return avg;
     
    
      
}

const numbers = [42, 45, 14, 4, 7 , 8];
console.log('Average of odd numbers is: ', oddAverage(numbers));