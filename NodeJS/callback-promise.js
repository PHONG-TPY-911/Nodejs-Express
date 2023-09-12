// todo set to do work and time
// console.log("start load")
// setTimeout(() =>{
//     console.log("loading");
// },3000)
// console.log("Endload");

// todo Callback Function
// function calcutate(x,y) {
//     return x+y
// }
// function calcutate(x,y,callback) {
//     setTimeout(() => {
//         const sum = x+y
//         callback(sum)
//     }, 3000);
// }
// function display(result) {  
//     console.log(`Total = ${result}`);
// }
// todo function ປົກກະຕິ
// const sum = calcutate(5,5)
// display(sum)

// todo function callback ສາມາດຂຽນແບບນີ້ໄດ້ ເພື່ອລົດໂຄ້ດສັ່ນລົງ
// const sum = calcutate(5,5,display)
// const sum = calcutate(5,5,function(result) {
//     console.log(`Total = ${result}`);
// })

//todo ຂຽນ program download data callback
// const url1 = "phong.com/file1.json"

// function downloading(url) {
//     console.log(`loading ${url}`);
// }
// todo setTimeout and ADD callback
// function downloading(url,callback) {
//     console.log(`loading ${url}`);
//     setTimeout(() => {
//         callback(url)
//     }, 3000);
// }

// function complete() {
//     console.log('load Complete');
// }
// TODO ສາມາດສົ່ງຄ່າມາເຮັດວຽກທາງໃນໄດ້ callback
// function complete(result) {
//     console.log(`load ${result} Complete`);
// }

// todo run to function
// downloading(url1)
// complete()

// todo get the value callback
// downloading(url1,complete)

// todo ສາມາດຂຽນໂຄ່ດສັ້ນລົງໄດ້
// downloading(url1,function(result) {
//     console.log(`load ${result} Complete`);
// })


//todo ຂຽນ program download data callback ກຳນົດໃຫ້ໂປຣແກຣມ load ເທື່ອລະ 1 ລຽງຕາມລຳດັບ
// const url1 = "phong.com/file1.json"
// const url2 = "phong.com/file2.json"
// const url3 = "phong.com/file3.json"

// todo setTimeout and ADD callback
// function downloading(url, callback) {
//     console.log(`loading ${url}`);
//     setTimeout(() => {
//         callback(url)
//     }, 1000);
// }

// TODO ສາມາດສົ່ງຄ່າມາເຮັດວຽກທາງໃນໄດ້ callback
// function complete(result) {
//     console.log(`load ${result} Complete`);
// }

// todo ສາມາດຂຽນໂຄ່ດສັ້ນລົງໄດ້
// downloading(url1, function (result) {
//     console.log(`load ${result} Complete`);
//     //todo ສາມາດຂຽນ function callback ໃນ function callback ໄດ້
//     downloading(url2, function (result) {
//         console.log(`load ${result} Complete`);
//         downloading(url3, function (result) {
//             console.log(`load ${result} Complete`);
//         })
//     })

// })

// todo crate Promise

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

// todo function call
// todo mean result is get the value resolve fow to show
// downloading(url1).then(result=> {
//     console.log(result);
// }).catch(err=> {
//     // todo recject becuase result get the value function downloading is to be callback
//     console.log(err);
// }).finally(() => {
//     console.log('Exsit work');
// });
// todo case haave to download many files
// downloading(url1).then(function(result){
//     console.log(result);
//     downloading(url2).then(function(result){
//         console.log(result);
//     });
// });
// todo short the code with .then
downloading(url1).then(function(result){
    console.log(result);
    return downloading(url2);
}).then(function(result) {
    console.log(result);
    return downloading(url3);
}).then(function(result) {
    console.log(result);
    // return downloading(url4);
})