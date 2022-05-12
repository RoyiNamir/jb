function createPromise(value, time, isResolved) {
    return new Promise((resolve, reject) => {
        setTimeout(() => isResolved ? resolve(value) : reject(value), time)
    })
}


async function doSomethingAsyncWhenAllReolved() {
    let p1 = createPromise("hebrew", 2000, true)
    let p2 = createPromise("english", 4000, true)
    let p3 = createPromise("india", 300, true)

    let result = await Promise.all([p1, p2, p3]);

    let sel = document.getElementById("sel");
    result.forEach(element => {
        var el = document.createElement("option");
        el.textContent = element;
        el.value = element;
        sel.appendChild(el);
    });


}


async function doSomethingAsyncWhenAnyReolved() {
    let p1 = createPromise("lighter from avi", 1000, false)
    let p2 = createPromise("lighter from eli", 6000, true)
    let p3 = createPromise("lighter from gali", 5000, false)

    let singleValue = Promise.any([p1, p2, p3])
                             .then(f => console.log(f))
                             .finally(() => console.log("operation has finished"))
    //console.log(singleValue);
    /*  let sel = document.getElementById("sel");
      
          var el = document.createElement("option");
          el.textContent = singleValue;
          el.value = singleValue;
          sel.appendChild(el);*/

}


//doSomethingAsyncWhenAllReolved();
doSomethingAsyncWhenAnyReolved();


//see also : https://jsbin.com/sutuyaximi/1/edit?js,console,output