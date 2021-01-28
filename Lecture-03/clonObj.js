const obj1 = {
    person : 'Tossapol',
    weight : 45
}

//const obj2 = obj1;
const obj2 = Object.assign({},obj1);
//const obj2 = {... obj1};
obj2.weight = 80;
console.log(obj1);
console.log(obj2);