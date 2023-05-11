// Lesson 1
// Input: 
// +Lương 1 Ngày = 100.000
// +Số ngày làm
// Process:
// +Tính tiền lương nhân viên : lương 1 ngày * số ngày làm
// Output:
// +Lương nhân viên
var btn = document.getElementById("btn");
btn.onclick = function(){
    var dayWorking = parseInt(document.getElementById("dayWorking").value);
    var dayMage = 10000;
    var mage;
    mage = dayWorking * dayMage ;
    document.getElementById("text").innerHTML = mage;
}   
// Lesson 2 
// Input:
// +Nhập 5 số thực
// Process:
// +Tính giá trị trung bình của 5 số này : lấy 5 số cộng lại rồi chia 5
// Output:
// +Giá trị trung bình của 5 số
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    var number = parseInt(document.getElementById("number").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);
    var number4 = parseInt(document.getElementById("number4").value);
    var number5 = parseInt(document.getElementById("number5").value);
    var average;
    average = (number + number2 + number3 + number4 + number5) / 5;
    document.getElementById("text2").innerHTML = average;
}
// Lesson 3 
// Input:
// +Giá đô : 23500
// +Nhập số tiền đô cần đổi
// Process:
// +Tính số tiền sau quy đổi VND : lấy số tiền đô nhập * 23500
// Output:
// +Số tiền quy đổi qua VND
var btn3 = document.getElementById("btn3");
btn3.onclick = function(){
    var usd = parseInt(document.getElementById("usd").value);
    var rate = 23500;
    var trans = usd * 23500;
    document.getElementById("text3").innerHTML = trans;
}
// Lesson 4 
// Input:
// +Nhập chiều dài và rộng
// Process:
// +Tính chu vi : (dài + rộng ) * 2 và diện tích : dài * rộng
// Output:
// +Chu vi và diện tích
var btn4 = document.getElementById("btn4");
btn4.onclick = function (){
    var long = parseInt(document.getElementById("long").value);
    var width = parseInt(document.getElementById("width").value);
    var perimeter = (long + width) * 2;
    var acreage = long * width;
    document.getElementById("text4").innerHTML = perimeter;
    document.getElementById("text5").innerHTML = acreage;
}
// Lesson 5
// Input:
// Nhập số có 2 chữ số
// Process:
// Tính tổng 2 ký số vừa nhập : % 10 để lấy hàng đơn vị , math.floor / 10 để lấy hàng chục
// Output:
// Tổng 2 ký số vừa nhập
var btn5 = document.getElementById("btn5");
btn5.onclick =function(){
    var num = parseInt(document.getElementById("num").value)
    var num2 = num % 10;
    var num3 = Math.floor(num/10);
    var num4 = num2 + num3;
    document.getElementById("text6").innerHTML = num4;
}