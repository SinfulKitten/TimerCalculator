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
function emailTimer48() {
    //getting the timestamp from the client email

    var currentHour = checkTimeStamp();
    var day = getcurrentDay();
    var dayName = getcurrentDayName(day);
    var min = getcurrentMin();
    var sendDay = 0;
    var sendHour = 0;

    //if email is recieved friday , Tuesday it is now
    if (dayName == "Friday") {
        sendDay = 2; //tuesday
        sendHour = 7; // 07:00
        console.log("received at: " + dayName + " " + currentHour + ":" + min);
        console.log(
            "send at: " + getDayName(sendDay) + " " + sendHour + ":" + min
        );
    } else if (dayName == "Saturday") {
        sendDay = 2;
        sendHour = 7;
        console.log("received at: " + dayName + " " + currentHour + ":" + min);
        console.log(
            "send at: " + getDayName(sendDay) + " " + sendHour + ":" + min
        );

        //if email is recieved on Sunday , 24 hours are added
    } else if (dayName == "Sunday") {
        sendDay = 2;
        sendHour = 7;
        console.log("received at: " + dayName + " " + currentHour + ":" + min);
        console.log(
            "send at: " + getDayName(sendDay) + " " + sendHour + ":" + min
        );

        //If between Monday and Friday, check if it is within office hours ,
        //if so , add 2 hours
    } else if (day >= 1 && day <= 4) {
        if (dayName == "Thursday") {
                sendDay = 1;
                sendHour = 7;
                console.log(
                    "received at: " + dayName + " " + currentHour + ":" + min
                );
                console.log(
                    "send at: " +
                        getDayName(sendDay) +
                        " " +
                        sendHour +
                        ":" +
                        min
                );
        }
        else if (dayName == "Wednesday"){
            if (currentHour >= 20 && min > 0) {
                                sendDay = 1;
                                sendHour = 7;
                                console.log(
                                    "received at: " +
                                        dayName +
                                        " " +
                                        currentHour +
                                        ":" +
                                        min
                                );
                                console.log(
                                    "send at: " +
                                        getDayName(sendDay) +
                                        " " +
                                        sendHour +
                                        ":" +
                                        min
                                );
            }
        }
        else if (currentHour >= 7 && currentHour <= 20) {
            sendDay = day + 2;
            sendHour = currentHour;

            console.log(
                "received at: " + dayName + " " + currentHour + ":" + min
            );
            console.log(
                "send at: " + getDayName(sendDay) + " " + sendHour + ":" + min
            );
            //send email
        } else {
            sendDay = day + 3;
            sendHour = 7;
            console.log(
                "received at: " + dayName + " " + currentHour + ":" + min
            );
            console.log(
                "send at: " + getDayName(sendDay) + " " + sendHour + ":" + min
            );
        }
    }
}
