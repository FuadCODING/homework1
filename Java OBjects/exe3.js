
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};
function displayTime(time) {
    let hours = String(time.hours).padStart(2, '0');
    let minutes = String(time.minutes).padStart(2, '0');
    let seconds = String(time.seconds).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);
}
function addSeconds(time, secondsToAdd) {
    time.seconds += secondsToAdd;

    while (time.seconds >= 60) {
        time.seconds -= 60;
        time.minutes += 1;
    }

    while (time.seconds < 0) {
        time.seconds += 60;
        time.minutes -= 1;
    }

   
    addMinutes(time, 0);
}
function addMinutes(time, minutesToAdd) {
    time.minutes += minutesToAdd;

    while (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours += 1;
    }

    while (time.minutes < 0) {
        time.minutes += 60;
        time.hours -= 1;
    }

   
    addHours(time, 0);
}
function addHours(time, hoursToAdd) {
    time.hours += hoursToAdd;

    while (time.hours >= 24) {
        time.hours -= 24;
    }

    while (time.hours < 0) {
        time.hours += 24;
    }
}

displayTime(time);


addSeconds(time, 30);
displayTime(time); 


addMinutes(time, 45);
displayTime(time); 


addHours(time, 5);
displayTime(time); 
