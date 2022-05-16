function createPromise(value, time, isResolved) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (isResolved ? resolve(value) : reject(value)), time);
  });
}

async function work() {
  async function go(txt, delay, isResolve) {
    let r = await createPromise(txt, delay, isResolve);
    console.log(r);
  }
 
  go("hebrew", 2000, true);
  go("english", 4000, true);
  go("india", 300, true);
}

work();
