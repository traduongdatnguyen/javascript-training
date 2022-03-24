
//Conditional Execution
//kiểm tra điều kiện giá trị truyền vào có phải là một số không hợp lệ hay không (NaN).
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
            console.log("Your number is the square root of " + theNumber * theNumber);
}

//while loops: vòng lặp while
var  i = 0;
while(i < 10) {
    console.log(i);
    i++;
}//0...9
//do Loops: vòng lặp do.while
let  yourName;
do {
     yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


//for loops
for (let number = 0; number <= 12; number += 2) {
     console.log(number);
} 
// → 0 
// → 2 
//.. etcetera

for (let current = 20; ; current++) {
       if (current % 7 == 0) {
                   console.log(current);
                   break;
        }
} // → 21

//switch: thay thế một chuỗi câu lệnh if
switch (prompt("What is the weather like?")) {
   case "rainy":
         console.log("Remember to bring an umbrella.");
         break;
   case "sunny":
        console.log("Dress lightly.");
        break;
   case "cloudy":
        console.log("Go outside.");
        break;
   default:
       console.log("Unknown weather type!"); 
       break;
}