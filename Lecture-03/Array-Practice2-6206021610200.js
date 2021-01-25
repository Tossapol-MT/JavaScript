let furniture = ['Table', 'Chairs', 'Couch'];

function home(furniture) {
    i = 0;   
    while(i <furniture.length){
        const name = furniture[i];
        i++;
        for(let char of name){
            console.log(char);
            
        }
    console.log();
    }

}
home(furniture);