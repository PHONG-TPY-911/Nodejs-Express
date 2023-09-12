// todo create Async && await

const connect = true; //todo check connect internet
const url1 = "phonf.com1";
const url2 = "phonf.com2";
const url3 = "phonf.com3";
const url4 = "phonf.com4";
const url5 = "phonf.com5";
const url6 = "phonf.com6";
function downloading(url) {
    // todo in promise ti have callback function
    return new Promise(function (resolve, reject) {
        console.log(`loading form files ${url}`);
        // todo we can set Timeout
        setTimeout(() => {
            if (connect) {
                // todo compare resolve
                resolve(`load ${url} success`)
                // console.log(`load ${url} success`);
            } else {
                // todo compare reject
                reject('Error')
                // console.log('Error');
            }
        }, 1000)

    })
}

// todo create Async && await
async function start() {
    // todo await frist file is to complate
    console.log(await downloading(url1));
    console.log(await downloading(url2));
    console.log(await downloading(url3));
    console.log(await downloading(url4));
    console.log(await downloading(url5));
    console.log(await downloading(url6));
}
// todo function call start
start();