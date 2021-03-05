

let countdownTimer = function () {

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var n = weekday[d.getDay()];
    
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();


    if (hours > 9 && hours < 16 && n !== 'Saturday' && n!== 'Sunday') {
        let marketCloseHours = (16 - hours);
        marketCloseMinutes = (60 - minutes);
        marketCloseSeconds = (60 - seconds);

        let countdown = document.getElementById('countdown').innerHTML = 
            'Time to market close: ' + marketCloseHours + ':' + marketCloseMinutes + ':' + marketCloseSeconds;
    };
}

setInterval(countdownTimer, 1000);