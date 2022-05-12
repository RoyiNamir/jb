function createPromise(value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), time)
    })
}


async function doSomethingAsyncWhenAllReolved() {
    let p1 = createPromise("hebrew", 2000)
    let p2 = createPromise("english", 4000)
    let p3 = createPromise("india", 300)

    let result = await Promise.all([p1, p2, p3])

    let sel = document.getElementById("sel");
    result.forEach(element => {
        var el = document.createElement("option");
        el.textContent = element;
        el.value = element;
        sel.appendChild(el);
    });

  
}


async function doSomethingAsyncWhenAnyReolved() {
    let p1 = createPromise("lighter from avi", 1000)
    let p2 = createPromise("lighter from eli", 6000)
    let p3 = createPromise("lighter from gali", 5000)

    let singleValue = await Promise.any([p1, p2, p3])

    let sel = document.getElementById("sel");
    
        var el = document.createElement("option");
        el.textContent = singleValue;
        el.value = singleValue;
        sel.appendChild(el);
      
}


//doSomethingAsyncWhenAllReolved();
doSomethingAsyncWhenAnyReolved();
