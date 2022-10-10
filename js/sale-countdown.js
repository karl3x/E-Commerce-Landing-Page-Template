const saleDays = document.getElementById("days");
const saleHrs = document.getElementById("hours");
const saleMins = document.getElementById("mins");
const saleEnds = document.getElementById("sale-ends");

//WHERE COUNTDOWN WILL END
var countDownDate = new Date("Dec 25, 2022 23:59:00").getTime();

var x = setInterval(function (){

    //Date and Time Today
    var today = new Date().getTime();

    //The difference between the date today and the countdown date
    var distance = countDownDate - today;

    //Time calculation for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    saleDays.innerHTML = days;
    saleHrs.innerHTML = hours;
    saleMins.innerHTML = minutes;

    //If the countdown is over
    if (distance < 0){
        clearInterval(x);
        saleEnds.innerHTML = "SALE ENDS";
        saleEnds.style.display = "block";

        saleDays.style.display = "none";
        saleHrs.style.display = "none";
        saleMins.style.display = "none";
    }

}, 1000);
