function createPromise(value, time, isResolved) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (isResolved ? resolve(value) : reject(value)), time);
    });
}


  function work() {

    async function runMe(value, time, isResolved) {
         
        console.log(` I'm about to work on ${value} ....`);
        let result = await createPromise(value, time, isResolved)
        console.log(` finished with value : ${result}`);
    }

    
     runMe("hebrew", 10000, true) 
     runMe("english", 15000, true);
     runMe("india", 5000, true);
     
}

work();