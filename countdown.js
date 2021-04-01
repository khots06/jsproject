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


    if (hours >= 10 && hours < 16 && n !== 'Saturday' && n!== 'Sunday') {
        marketCloseHours = (15 - hours);
        marketCloseMinutes = (59 - minutes);
        marketCloseSeconds = (59 - seconds);

        let countdown = document.getElementById('countdown').innerHTML = 
            '<b>Time to Market close: </b>' + ('0' + marketCloseHours).slice(-2) + ':' + ('0' + marketCloseMinutes).slice(-2) + ':' + ('0' + marketCloseSeconds).slice(-2);
    } else {
        document.getElementById('countdown').innerHTML = '<b>The Market is currently closed.</b>'
    };

    if (hours === 9 && minutes >= 30 && n !== 'Saturday' && n !== 'Sunday') {
        marketCloseHours = (15 - hours);
        marketCloseMinutes = (59 - minutes);
        marketCloseSeconds = (59 - seconds);

        let countdown = document.getElementById('countdown').innerHTML = 
            '<b>Time to Market close: </b>' + ('0' + marketCloseHours).slice(-2) + ':' + ('0' + marketCloseMinutes).slice(-2) + ':' + ('0' + marketCloseSeconds).slice(-2);
    };
   
}

setInterval(countdownTimer, 1000);