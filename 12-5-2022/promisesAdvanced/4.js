//"ggg".then(f=>console.log("hi"));  //error , will not work !


Promise.resolve("ggg").then(f=>console.log("hi"));

let p  = new Promise((v,x)=>v("ggg"))
 



