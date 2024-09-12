function noDuplicate(arr){
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]===arr[index+1]) {
            return true;
        }
        else{
            return false;
        }
        
    }
    

}

const arr = [12,15,16];
console.log(noDuplicate(arr));