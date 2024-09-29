const p1 = (a,b,c) =>{
    return a*b*c;
}
console.log(p1(2,3,4));
console.log('............');
const p = 
`I am a web developer
I love to code
I love to ear briyani`;
console.log(p);
console.log('............');
const dtest = (a=20,b=50)=>{
    return a+b;
}
console.log(dtest());
console.log('............');

const name = (arr)=>{
    return arr;
}
const arr1 =['Rafid','Shabira','Taha'];
const arr2 =[];
console.log(name(arr1));
for(let i = 0; i<arr1.length; i++){
    if (arr1[i].length%2===0) {
        arr2.push(arr1[i]);
    }
    else{
        console.log('none');
    }
     
}
console.log(arr2);

const num = [15,1,2,5,6,8,];
const big = (array)=>{
    let sum = 0;
    let average;
    for (let i = 0; i < array.length; i++) {
       
       const value = array[i]*array[i];
       console.log(value);
       sum +=value;
       

        
    }
    average = sum/array.length;
    console.log(sum);
    console.log(average);
}
big(num);

let a = [10,2,5];
let b = [10,2,4];
const two = (arrx,arry)=>{
    let combine =[ ...new Set([...arrx,...arry])];
    const max = Math.max(...combine);
    console.log(combine);
    console.log(max);
}
two(a,b);