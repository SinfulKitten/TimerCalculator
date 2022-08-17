//recieves the current day as a parameter , checks what day it is
//returns a Stringified version of the current day
function getDayName(currentDay) {
    if (currentDay == 0) {
        return "Sunday";
    } else if (currentDay == 1) {
        return "Monday";
    } else if (currentDay == 2) {
        return "Tuesday";
    } else if (currentDay == 3) {
        return "Wednesday";
    } else if (currentDay == 4) {
        return "Thursday";
    } else if (currentDay == 5) {
        return "Friday";
    } else if (currentDay == 6) {
        return "Saturday";
    }
}

function getMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return months[month];
}
/*
Gets the timestamp of when the client email was sent
**/
function checkTimeStamp() {
    //instantiating date and time objects

    //examples to demonstrate functionality
    currentDate = new Date();
    //getting the current hour and day

    let currentHour = currentDate.getHours();
    //returns the time stamp on the email was recieved
    return currentHour;
}

/*
Gets the current minutes
**/
function getcurrentMin() {
    const currentDate = new Date();
    let min = currentDate.getMinutes();
    return min;
}
/*
Gets the current day name (Eg. "Friday")
**/
function getcurrentDayName(day) {
    let dayName = getDayName(day);
    return dayName;
}

/*
Gets the current day in 24 hour format
**/
function getcurrentDay() {
    currentDate = new Date();
    let currentDay = currentDate.getDay();
    return currentDay;
}

/*
checks when the client email was sent , calculates the day and hour of which a reply is sent
**/
function emailTimer168() {
    //getting the timestamp from the client email

    var currentHour = checkTimeStamp();
    const date = new Date();
    const sendDate = new Date();
    let currentDate = date.getDate();
    let currentMonthName = getMonthName(date.getMonth());
    var day = getcurrentDay();
    var dayName = getcurrentDayName(day);
    var min = getcurrentMin();
    // let sendDay = 0;
    // let sendHour = currentHour;
    let sendMin = "00";

    if (dayName == "Friday") {
        if (7 >= currentHour < 20) {
            sendDay = day;
            sendDate.setDate(currentDate + 7);
            document.getElementById("received").innerHTML =
                "received at: " +
                dayName +
                " the " +
                currentDate +
                " " +
                currentMonthName +
                " " +
                currentHour +
                ":" +
                min;

            document.getElementById("sent").innerHTML =
                "send at: " +
                getDayName(sendDate.getDay()) +
                " the " +
                sendDate.getDate() +
                " " +
                getMonthName(sendDate.getMonth()) +
                " " +
                currentHour +
                ":" +
                min;
        } else {
            //friday out of trading hours
            sendHour = 7; // 07:00
            sendDate.setDate(currentDate + 10);
            document.getElementById("received").innerHTML =
                "received at: " +
                dayName +
                " the " +
                currentDate +
                " " +
                currentMonthName +
                " " +
                currentHour +
                ":" +
                min;

            document.getElementById("sent").innerHTML =
                "send at: " +
                getDayName(sendDate.getDay()) +
                " the " +
                sendDate.getDate() +
                " " +
                getMonthName(sendDate.getMonth()) +
                " " +
                currentHour +
                ":" +
                sendMin;
        }
    } else if (dayName == "Saturday") {
        sendHour = 7;
        sendDate.setDate(currentDate + 9);
        document.getElementById("received").innerHTML =
            "received at: " +
            dayName +
            " the " +
            currentDate +
            " " +
            currentMonthName +
            " " +
            currentHour +
            ":" +
            min;

        document.getElementById("sent").innerHTML =
            "send at: " +
            getDayName(sendDate.getDay()) +
            " the " +
            sendDate.getDate() +
            " " +
            getMonthName(sendDate.getMonth()) +
            " " +
            currentHour +
            ":" +
            sendMin;
    } else if (dayName == "Sunday") {
        sendHour = 7;
        sendDate.setDate(currentDate + 8);
        document.getElementById("received").innerHTML =
            "received at: " +
            dayName +
            " the " +
            currentDate +
            " " +
            currentMonthName +
            " " +
            currentHour +
            ":" +
            min;

        document.getElementById("sent").innerHTML =
            "send at: " +
            getDayName(sendDate.getDay()) +
            " the " +
            sendDate.getDate() +
            " " +
            getMonthName(sendDate.getMonth()) +
            " " +
            currentHour +
            ":" +
            sendMin;
    } else if (day >= 1 && day <= 5) {
        if (currentHour >= 7 && currentHour <= 20) {
            sendDay = day;
            sendHour = currentHour;
            sendDate.setDate(currentDate + 7);
            document.getElementById("received").innerHTML =
                "received at: " +
                dayName +
                " the " +
                currentDate +
                " " +
                currentMonthName +
                " " +
                currentHour +
                ":" +
                min;

            document.getElementById("sent").innerHTML =
                "send at: " +
                getDayName(sendDate.getDay()) +
                " the " +
                sendDate.getDate() +
                " " +
                getMonthName(sendDate.getMonth()) +
                " " +
                currentHour +
                ":" +
                min;
        } else {
            //if email is sent out of working hours , send reply a week and one day later
            sendDay = day + 1;
            sendHour = 7;
            sendDate.setDate(currentDate + 8);
            document.getElementById("received").innerHTML =
                "received at: " +
                dayName +
                " the " +
                currentDate +
                " " +
                currentMonthName +
                " " +
                currentHour +
                ":" +
                min;

            document.getElementById("sent").innerHTML =
                "send at: " +
                getDayName(sendDate.getDay()) +
                " the " +
                sendDate.getDate() +
                " " +
                getMonthName(sendDate.getMonth()) +
                " " +
                currentHour +
                ":" +
                sendMin;
        }
    }
}
