

let arr = [1, 2, 3, { name: "avi", age: 42 }]


async function start() {

    function fetch(url) {
        let p = new Promise((v, x) => {
            setTimeout(() => { console.log(`fetching from2 [${url}] ...`); v(arr) }, 1500)
        })
        return p;
    }


    function fetch2(url) {
        let p = new Promise((v, x) => {
            setTimeout(() => { console.log(`fetching2 from2 [${url}] ...`); v(arr) }, 1500)
        })
        return p;
    }

    //or this  =========>
    //    fetch("walla.co.il2").then(r1=> {console.log(r1)}).then(()=>fetch("ynet.co.il")).then((r2)=>console.log(r2))


    //or this  (preferred) =========>
    let r1 = await fetch("walla.co.il");
    console.log(r1);
    let r2 = await fetch2("ynet.co.il");
    console.log(r2);
}

start()