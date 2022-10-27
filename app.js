'use strict';
// stopwatch
{
    let display = document.querySelector('#display');
    let startStop = document.querySelector('#startstop');
    let reset = document.querySelector('#reset');

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let newHours = 0;
    let newMinutes = 0;
    let newSeconds = 0;

    let status = "stop";
    let interval;

    function stopWatch() {
        seconds++;
        if(seconds / 100 == 1){
            minutes++;
            seconds = 0;
            if(minutes / 60 == 1) {
                hours++;
                minutes = 0;
            }
        }
        if(seconds < 10) {
            newSeconds = "0" + seconds;
        } else {
            newSeconds = seconds;
        }
        if(minutes < 10) {
            newMinutes = "0" + minutes;
        } else {
            newMinutes = minutes;
        }
        if(hours < 10) {
            newHours = "0" + hours;
        } else {
            newHours = hours;
        }
        display.textContent = `${newHours}:${newMinutes}:${newSeconds}`;
    }
    startStop.addEventListener('click',() => {
        if(status == "stop"){
            interval = setInterval(stopWatch,10);
            startStop.textContent = "stop";
            status = "start";
            display.classList.remove('flashing');
        } else {
            clearInterval(interval);
            startStop.textContent = "start";
            status = "stop";
            display.classList.add('flashing');
        }
    })
    reset.addEventListener('click',() => {
        clearInterval(interval);
        startStop.textContent = "start";
        status = "stop";
        display.textContent = "00:00:00";
        hours = 0;
        minutes = 0;
        seconds = 0;
        display.classList.remove('flashing');
    })
}
// timer
{
    const time = document.getElementById('time');
    const sec = document.querySelector('#sec');
    const start = document.querySelector('#start');
    const s = 1000;
    let count = 0;
    start.addEventListener('click',() => {
        const set_id = setInterval(() => {
            count++;
            time.textContent = count;
            if(count == sec.value) {
                clearInterval(set_id);  
                alert('time up');
            }
        },s);
    })
}
// calender
{
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    // let day = now.getDate();
    // console.log(day);

    $('.data-head').html(year + "-" + month);

    let last = new Date();
    // last.setDate(last.getDate() + 1);
    last = new Date(year,month,0);
    let last_year = last.getFullYear();
    let last_month = last.getMonth();
    let last_day = last.getDate();

    for(let i = 1; i <= last_day; i++) {
        let week = new Date(last_year,last_month, i).getDay();
        if(!week || i == 1) {
            $('table').find('tbody').append('<tr>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                            '</tr>'
            );
        }
        $('table').find('tbody').find('tr').last().find('td').eq(week).html(i);
    }

}
// clock
{
    setInterval(() => {
        const now = new Date();
        const days = ["sun","mon","tus","wed","thu","fri","sat"];
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        // const time = now.getTime();
        const day = now.getDay();
        // ↑上記の変数を毎秒更新するためにsetinterval内に格納する必要あり。
        let clock = document.querySelector('strong');
        // console.log(clock);
        clock.innerHTML = `${year}/${month}/${date}(${days[day]}) ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    },1000);
}