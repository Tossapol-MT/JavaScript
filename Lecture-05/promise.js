function promisesetTimeout(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms);
    });
}

promisesetTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promisesetTimeout(3000);
    })
   .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    }) 
    .then((result) => {
        console.log(result);
    })
    .catch(() =>{
        console.log("Error!");
    }); 