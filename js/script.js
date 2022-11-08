let toggleDate = true;

function calculate() {
    let rightContent = document.querySelector(".right-content");
    rightContent.classList.add("active");

    let birthMonth = parseInt(checkMonth(document.querySelector("#birth-month").value));
    let birthDay = parseInt(document.querySelector("#birth-day").value);
    let birthYear = parseInt(document.querySelector("#birth-year").value);

    let currentMonth, currentDay, currentYear;
    if (toggleDate) {
        currentMonth = parseInt(checkMonth(document.querySelector("#current-month").value));
        currentDay = parseInt(document.querySelector("#current-day").value);
        currentYear = parseInt(document.querySelector("#current-year").value);
    } else {
        let dt = new Date();
        currentMonth = parseInt(dt.getMonth());
        currentDay = parseInt(dt.getDate());
        currentYear = parseInt(dt.getFullYear());
    }
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > currentDay) {
        if (currentMonth == 0) {
            currentMonth = 12;
            currentYear -= 1;
        }
        currentDay = parseInt(currentDay) + month[currentMonth - 1];
        currentMonth -= 1;
    }
    if (birthMonth > currentMonth) {
        currentMonth += 12;
        currentYear -= 1;
    }
    let res_day = currentDay - birthDay;
    let res_month = currentMonth - birthMonth;
    let res_year = currentYear - birthYear;
    if (res_day < 0 || res_month < 0 || res_year < 0) {
        document.querySelector(".error").classList.add("active");
        let x = document.querySelectorAll(".age-disp");
        x.forEach((e) => {
            e.classList.add("invalid");
        });
    } else {
        document.querySelector(".error").classList.remove("active");
        let x = document.querySelectorAll(".age-disp");
        x.forEach((e) => {
            e.classList.remove("invalid");
        });

        let week = parseInt((res_month * 31 + res_year * 365) / 7 + parseInt(res_day / 7));
        let day = parseInt(res_month * 31 + res_year * 365 + res_day);
        let hour = parseInt(res_day * 24 + res_month * 730 + res_year * 8760);

        document.querySelector("#sec-val").innerHTML = hour * 60 * 60;
        document.querySelector("#min-val").innerHTML = hour * 60;
        document.querySelector("#hour-val").innerHTML = hour;
        document.querySelector("#day-val").innerHTML = day;
        document.querySelector("#week-val").innerHTML = week;
        document.querySelector("#day-week-val").innerHTML = res_day % 7;
        document.querySelector("#month-val").innerHTML = res_month + res_year * 12;
        document.querySelector("#month-day-val").innerHTML = res_day;
        document.querySelector("#year-val").innerHTML = res_year;
        document.querySelector("#year-month-val").innerHTML = res_month;
        document.querySelector("#year-day-val").innerHTML = res_day;
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
