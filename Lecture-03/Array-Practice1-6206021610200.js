let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];


function same(values1,values2){
    for(let index = 0 ; index < values1.length ; index++){
        if(typeof(values1[index]) === typeof(values2[index])){
            console.log("values1 with values2 = true");
        }else {
            console.log("values1 with values2 = false");
        }
    }
}
same(values2,values3);