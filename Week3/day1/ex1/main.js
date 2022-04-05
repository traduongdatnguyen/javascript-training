function print_loop() {
    //lấy number
    var number = document.getElementById("number").value;

    //ép kiểu sang Int

    number = parseInt(number);
    var html = '';
    for (var i = 1; i <= number; i++) {
        html += i + '<br/>';
    }
    document.getElementById("result").innerHTML = html;
}
