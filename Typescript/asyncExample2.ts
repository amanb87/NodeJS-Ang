let asyncFunc1 = () => {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}

async function main() {
    const x = await asyncFunc1(); // (A)
    console.log('Result_2: '+ x); // (B)
}
main();