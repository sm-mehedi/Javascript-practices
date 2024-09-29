const meaow = {
    name:"Pluto",
    walk(){
        return `Walk Walk Walk`
    },
    

}
let kako=()=>{
    console.log('njjj');
    console.log('njjj');
    console.log('njjj');
}


meaow.name = "Cutu";
console.log(meaow.name);
console.log(meaow.walk());

const getAge = (obj) =>{
    console.log('meaow2');
    return console.log(obj.age);};
const getName = (obj) =>{return obj.name};

const student = {
    age: 42,
    name: 'Meaow'
}
console.log('........................');
getAge(student);
console.log('........................');

const getAgeValue = console.log(getAge(student));
const getNameValue = console.log(getName(student));
console.log("..........");
kako();
console.log(kako());