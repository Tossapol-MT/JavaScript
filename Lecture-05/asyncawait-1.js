function promisesetTimeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run(){
    //logic
    console.log("Start!!");
    //try take of await and compare
    await promisesetTimeout(2000);
    console.log("Stop!!");
}

console.log('Brfore run');
run();
console.log('After run');
