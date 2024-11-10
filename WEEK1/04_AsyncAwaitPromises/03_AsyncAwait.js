function sayHello(){
    return new Promise((resolve)=>{
        console.log("pending state");
        setTimeout(()=>{
            resolve("hello world! async function resolved in 2 seconds");
        },2000)
        
    })
}
 async function resolvingPromise(){
    let fn = await sayHello(); //without await it will return a promise object and we need to use await to get the resolved value
    console.log(fn);
}

resolvingPromise();