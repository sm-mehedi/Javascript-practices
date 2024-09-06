function inchTofeet(name, inch){
    const feet = Math.round(inch/12);
    const inch1 = Math.round(inch%12);
    const result = name +"'s height is "+feet+" feet "+inch1+" inch";
    return result;
    

}
function kiloToMiles(kilo){
    const miles = Math.round(kilo*1.60);
    return miles;

}
console.log(kiloToMiles(25) );
const name ="Rafid";
console.log(inchTofeet(name ,5));