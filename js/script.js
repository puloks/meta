var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("min").innerText = minutes;
  document.getElementById("sec").innerText = seconds;

    
  document.getElementById("days2").innerText = days;
  document.getElementById("hours2").innerText = hours;
  document.getElementById("min2").innerText = minutes;
  document.getElementById("sec2").innerText = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




$(document).ready(function () {

    // const cd = new Date().getFullYear() + 1;
    $(function() {
        $('#countdown').countdown({
            year: 2022, // YYYY Format
            month: 4, // 1-12
            day: 3, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
            timezone: -6,
            labels: true

        });
        10
    });

    $(function() {
        $('#countdown2').countdown({
            year: 2022, // YYYY Format
            month: 4, // 1-12
            day: 3, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
            timezone: -6,
            labels: true
        });
        10
    });


});


