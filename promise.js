
function doWork() {

    let p = new Promise(function (v, x) {

        setTimeout(function () {
            console.log(1000);
            v(new Date())
        }, 500);

    })
    return p;
}

doWork().then(f => { console.log(f, "from resolve"); throw Error("ff") }, g => console.log(g, "from reject")).catch(f => console.log(f, "from catch"))
