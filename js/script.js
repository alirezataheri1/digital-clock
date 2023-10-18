let $ = document;

const weekDayArr = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const montheArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//elem variables
const weekDay = $.querySelector('.date__week-day');
const day = $.querySelector('.date__month-day');
const monthName = $.querySelector('.date__month-name');
const year = $.querySelector('.date__year');
const hour = $.querySelector('.time__hour');
const minute = $.querySelector('.time__minute');
const second = $.querySelector('.time__second');
const beforeAfterNoon = $.querySelector('.time__before-after-noon');

//set date and time for first
const date = new Date();
setDate(date);
setTime(date);

//date and time functions

function setDate(date) {
    let weekDayNumber;
    weekDayNumber = date.getDay();
    weekDay.innerHTML = weekDayArr[weekDayNumber];

    day.innerHTML = date.getDate();

    let monthNumber;
    monthNumber = date.getMonth();
    monthName.innerHTML = montheArr[monthNumber] + ',';

    year.innerHTML = date.getFullYear();
}

function setTime(date) {
    //hour
    if (date.getHours() < 10) {
        hour.innerHTML = '0' + date.getHours();
    } else {
        hour.innerHTML = date.getHours();
    }  
    
    //minute
    if (date.getMinutes() < 10) {
        minute.innerHTML = '0' + date.getMinutes();
    } else {
        minute.innerHTML = date.getMinutes();
    }  
    
    //seconds
    if (date.getSeconds() < 10) {
        second.innerHTML = '0' + date.getSeconds();
    } else {
        second.innerHTML = date.getSeconds();
    } 

    //before or after noon
    if (date.getHours() < 12) {
        beforeAfterNoon.innerHTML = 'AM';
    } else {
        beforeAfterNoon.innerHTML = 'PM';
    }
                                                                                                                    
    //set date 
    if (date.getHours() === 0) {
        const date = new Date();
        setDate(date);
    }
}

setInterval(function() {
    const date = new Date(); 

    setTime(date);
}, 1000);









