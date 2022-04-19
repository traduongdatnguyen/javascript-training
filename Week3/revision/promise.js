//khi promise được gọi thì ngay lập tức function(resolve, reject) được thực thi
// trong function trả về hai tham số resolve(thành công), reject(thất bại)
// var promise = new Promise(

//     function (resolve, reject) {
//         //thành công: resolve()
//         //thất bại: reject()
//         //    resolve(
//         //        [{
//         //            id : 1,
//         //            name : "nguyen"
//         //        }
//         //        ]
//         //    );
//         reject();

//     }
// );

// promise
//     //khi thành công thì .then được gọi
//     .then(function () {
//         console.log('ok');
//     })
//     .catch(function () {
//         console.log('lỗi');
//     })
//     .finally(function () {
//         console.log('lỗi ok');
//     });

var sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }
    );
}
sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
    });