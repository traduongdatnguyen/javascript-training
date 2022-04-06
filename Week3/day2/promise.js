const toTinh = () => {
    console.log("Chào em làm bạn gái anh nhá");
    const batDauToTinh = new Promise((resolve, reject) => {
        let emDongy = true;
        let name = "Yêu anh";
        setTimeout(
            () => {
                if (emDongy) {
                    console.log("Em đồng ý");
                    resolve(name);
                }else{
                    console.log("Em không đồng ý");
                    reject(name);
                }
            },5000);
    });
    return batDauToTinh;
}
toTinh().then(name => console.log("Anh yêu em"));