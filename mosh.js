const person = {
    name:"",
    meaow(){
        console.log("Meaowing");
        console.log("Meaowing");
        console.log("Meaowing");

    }
    ,
    Purr(){
        console.log("purring");
    } ,
    walk(){
        console.log(this);
    }

}


person.meaow();
console.log(person.meaow);

const walk = person.walk.bind(person);
walk();


