function yayOrNay(){
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random()*1);
        // 0 or 1 at random
        val ? resolve("Lucky ❤️") : reject("Nope 😠");
    });
}

async function msg(){
    //ดัก error
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err){
        console.log(err);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();
