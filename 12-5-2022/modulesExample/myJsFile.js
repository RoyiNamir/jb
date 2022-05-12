//import { add } from "./math.js" //for this to work , please add the package.json


let randomNumber = ~~(Math.random() * 10);
if (randomNumber % 2 == 0) {
    console.log("even");
     import("./math.js").then(banana => console.log(banana.default(4, 5)))
}
else { console.log("odd"); }

//console.log(add(4,5));


//for browser demo  ( non-node) please visit : https://stackblitz.com/edit/js-efj1bd?file=index.js,math.js


