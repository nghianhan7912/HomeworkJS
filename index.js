// Lesson 1 
var btn = document.getElementById("btn");
btn.onclick = function(){
    var dayWorking = parseInt(document.getElementById("dayWorking").value);
    var dayMage = 10000;
    var mage;
    mage = dayWorking * dayMage ;
    document.getElementById("text").innerHTML = mage;
}   
// Lesson 2 
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
var btn3 = document.getElementById("btn3");
btn3.onclick = function(){
    var usd = parseInt(document.getElementById("usd").value);
    var rate = 23500;
    var trans = usd * 23500;
    document.getElementById("text3").innerHTML = trans;
}
// Lesson 4 
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
var btn5 = document.getElementById("btn5");
btn5.onclick =function(){
    var num = parseInt(document.getElementById("num").value)
    var num2 = num % 10;
    var num3 = Math.floor(num/10);
    var num4 = num2 + num3;
    document.getElementById("text6").innerHTML = num4;
}