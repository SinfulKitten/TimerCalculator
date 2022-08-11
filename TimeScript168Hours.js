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
    currentDate = new Date("August 11, 2022 22:15:00");
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
    currentDate = new Date("August 11, 2022 22:15:00");
    let currentDay = currentDate.getDay();
    return currentDay;
}

/*
checks when the client email was sent , calculates the day and hour of which a reply is sent
**/
function emailTimer168() {
    //getting the timestamp from the client email

    var currentHour = checkTimeStamp();
    const date = new Date("August 11, 2022 22:15:00");
    const sendDate = new Date("August 11, 2022 22:15:00");
    let currentDate = date.getDate();
    console.log(currentDate);
    let currentMonthName = getMonthName(date.getMonth());
    var day = getcurrentDay();
    var dayName = getcurrentDayName(day);
    var min = getcurrentMin();
    var sendDay = 0;
    var sendHour;

    //if email is recieved friday , check if it was sent before cutoff @20:00
    if (dayName == "Friday") {
        //checks if client email was sent during working hours , sends a email 2 hours later
        if (7 >= currentHour < 18) {
            sendDay = day;
            sendDate.setDate(currentDate + 7);
            sendHour = currentHour;
            console.log(
                "received at: " +
                    dayName +
                    " the " +
                    currentDate +
                    " " +
                    currentMonthName +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
        console.log(
            "send at: " +
                getDayName(sendDate.getDay()) +
                " the " +
                sendDate.getDate() +
                " " +
                getMonthName(sendDate.getMonth()) +
                " " +
                sendHour +
                ":" +
                min
        );
        }
        else {
            sendHour = 7; // 07:00
            sendDate.setDate(currentDate + 10);
             console.log(
                 "received at: " +
                     dayName +
                     " the " +
                     currentDate +
                     " " +
                     currentMonthName +
                     " " +
                     currentHour +
                     ":" +
                     min
             );
             console.log(
                 "send at: " +
                     getDayName(sendDate.getDay()) +
                     " the " +
                     sendDate.getDate() +
                     " " +
                     getMonthName(sendDate.getMonth()) +
                     " " +
                     currentHour +
                     ":" +
                     min
             );
        }
    } else if (dayName == "Saturday") {

        sendHour = 7;
        sendDate.setDate(currentDate + 9);
            console.log(
                "received at: " +
                    dayName +
                    " the " +
                    currentDate +
                    " " +
                    currentMonthName +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
            console.log(
                "send at: " +
                    getDayName(sendDate.getDay()) +
                    " the " +
                    sendDate.getDate() +
                    " " +
                    getMonthName(sendDate.getMonth()) +
                    " " +
                    currentHour +
                    ":" +
                    min
            );

        //if email is recieved on Sunday , 24 hours are added
    } else if (dayName == "Sunday") {

        sendHour = 7;
        sendDate.setDate(currentDate + 8);
            console.log(
                "received at: " +
                    dayName +
                    " the " +
                    currentDate +
                    " " +
                    currentMonthName +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
            console.log(
                "send at: " +
                    getDayName(sendDate.getDay()) +
                    " the " +
                    sendDate.getDate() +
                    " " +
                    getMonthName(sendDate.getMonth()) +
                    " " +
                    currentHour +
                    ":" +
                    min
            );

        //If between Monday and Friday, check if it is within office hours ,
        //if so , add 2 hours
    } else if (day >= 1 && day <= 5) {
        if (currentHour >= 7 && currentHour <= 18) {
            sendDay = day;
            sendHour = currentHour;
            sendDate.setDate(currentDate + 7);
            console.log(
                "received at: " +
                    dayName +
                    " the " +
                    currentDate +
                    " " +
                    currentMonthName +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
            console.log(
                "send at: " +
                    getDayName(sendDate.getDay()) +
                    " the " +
                    sendDate.getDate() +
                    " " +
                    getMonthName(sendDate.getMonth()) +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
            //send email
        } else {
            sendDay = day + 1;
            sendHour = 7;
            sendDate.setDate(currentDate + 8);
            console.log(
                "received at: " +
                    dayName +
                    " the " +
                    currentDate +
                    " " +
                    currentMonthName +
                    " " +
                    currentHour +
                    ":" +
                    min
            );
            console.log(
                "send at: " +
                    getDayName(sendDate.getDay()) +
                    " the " +
                    sendDate.getDate() +
                    " " +
                    getMonthName(sendDate.getMonth()) +
                    " " +
                    sendHour +
                    ":" +
                    min
            );
        }
    }
}
