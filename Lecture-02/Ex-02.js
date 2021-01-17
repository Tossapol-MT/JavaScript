function equation (str){
    let cal = str;
    let op = "";
    let e = "";
    let x = 0;
    for(var i = 0 ; i < str.length ; i++){
        if(cal[i] === "+")
        {
            op += '+';
        }
        else if(cal[i] === "-")
        {   
            op += "-";
        }
        else if(cal[i] === "*")
        {
            op += "*";
        }else
        {
            e += cal[i]
        }
    }
    let p = 0;
    p += parseInt(e[0]);
    for(i = 0 ; i < op.length ; i++){
        if(op[i] === "+"){
            p += parseInt(e[i+1])
        }
        else if(op[i] === "-"){
            p -= parseInt(e[i+1])
        }else if(op[i] === "*"){
            p *= parseInt(e[i+1])
        }
    } 
    return(p); 
}
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));