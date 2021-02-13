let asyncFunc = () => {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}

asyncFunc()
  .then(x => console.log('Result_1: '+ x));