function calculate() {
    let rightContent = document.querySelector(".right-content");
    rightContent.classList.add("active");

    let birthMonth = checkMonth(document.querySelector("#birth-month").value);
    let birthDay = document.querySelector("#birth-day").value;
    let birthYear = document.querySelector("#birth-year").value;

    let currentMonth = checkMonth(document.querySelector("#current-month").value);
    let currentDay = document.querySelector("#current-day").value;
    let currentYear = document.querySelector("#current-year").value;

    let birthVal = birthDay * 86400 + birthMonth * 2628288 + birthYear * 31536000;
    let currentVal = currentDay * 86400 + currentMonth * 2628288 + currentYear * 31536000;
    
    if (currentVal < birthVal) {
        console.log("Wrong Input");
    } else {
        console.log(birthVal);
        console.log(currentVal);
        let sec = currentVal - birthVal;
        let min = sec / 60;
        let hour = min / 60;
        let days = hour / 24;
        let week = days / 7;
        let month = days / 30;
        let year = days / 365;
        let yearMonth = (days / 365 - year) * 12;
        document.querySelector("#sec-val").innerHTML = sec;
        document.querySelector("#min-val").innerHTML = min;
        document.querySelector("#hour-val").innerHTML = hour;
        document.querySelector("#day-val").innerHTML = days;
        document.querySelector("#week-val").innerHTML = week;
        document.querySelector("#day-week-val").innerHTML = days % 7;
        document.querySelector("#month-val").innerHTML = month;
        document.querySelector("#month-day-val").innerHTML = days % 30;
        document.querySelector("#year-val").innerHTML = year;
        document.querySelector("#year-month-val").innerHTML = yearMonth;
        document.querySelector("#year-day-val").innerHTML = Math.round(((days / 365 - year) * 12 - yearMonth) * 30);

        console.log(currentVal - birthVal);
    }
}

function checkMonth(month) {
    if (month == "January") month = 0;
    else if (month == "February") month = 1;
    else if (month == "March") month = 2;
    else if (month == "April") month = 3;
    else if (month == "May") month = 4;
    else if (month == "June") month = 5;
    else if (month == "July") month = 6;
    else if (month == "August") month = 7;
    else if (month == "September") month = 8;
    else if (month == "October") month = 9;
    else if (month == "November") month = 10;
    else if (month == "December") month = 11;

    return month;
}

let toggleDate = true;

function recentDate() {
    toggleAccess();
    toggleImg();
    toggleDate = !toggleDate;
}

function toggleAccess() {
    let input = document.querySelectorAll(".current");
    for (const i of input) {
        if (toggleDate) {
            i.classList.add("gray");
            i.setAttribute("disabled", "");
        } else {
            i.classList.remove("gray");
            i.removeAttribute("disabled");
        }
    }
}

function toggleImg() {
    let enable = document.querySelector(".enable");
    let disable = document.querySelector(".disable");

    enable.classList.add("disable");
    enable.classList.remove("enable");

    disable.classList.add("enable");
    disable.classList.remove("disable");
}
