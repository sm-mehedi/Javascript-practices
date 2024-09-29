const keys = {
    name:'t1',
    name2:'t2',
}
const key1s = Object.keys(keys);
console.log(key1s);
//returns the property values
const values =  Object.values(keys);
console.log(values);
const twod = Object.entries(keys);
console.log(twod);
delete keys.name2;
console.log(keys);
keys.source = 'Bangladesh';
console.log(keys);
Object.freeze(keys);
keys.made = 'Bangladesh';
console.log(keys);
// because of freeze it was not added 