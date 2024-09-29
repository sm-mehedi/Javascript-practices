numbers = (number=2,p=4) =>{
    console.log("meaow");
    // return number*number*p;
}
numbers();
console.log(numbers());
console.log("......................");
numbers1 = (number=2,p=4) =>{
    console.log("meaow");
    return number*number*p;
}
numbers1();
console.log(numbers1());
console.log("......................");
numbers2 = (number=2,p=4) =>{
    console.log("meaow");
    return number*number*p;
}
numbers2();
console.log(numbers2());



const getAge = (obj) =>{return obj.age};
const getName = (obj) =>{return obj.name};

const student = {
    age: 42,
    name: 'Meaow'
}
console.log('........................');
const getAgeValue = console.log(getAge(student));
const getNameValue = console.log(getName(student));