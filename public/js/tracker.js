$(document).ready(function() {
const displayTime = document.querySelector("#displayTime");
displayTime.textContent = moment().format("dddd, MMMM DD, YYYY hh:mm A");
const clockInBtn = document.querySelector("#clock-in");
const clockOutBtn = document.querySelector("#clock-out");
const clockInTimeEl = document.querySelector("#clock-in-time");
const clockOutTimeEl = document.querySelector("#clock-out-time");
const currentTimeEl = document.querySelector("#current-time");
currentTimeEl.textContent = "Current Time: " + moment().format("h:mm:ss A");
const timeClockedInEl = document.querySelector("#time-clocked-in");
const todaysEarnings = document.querySelector("#money-earned");
const sessionTable = $("#session-data");

// const users = require("./users");

let resumeClockInTime;
let totalSeconds = 0;
let start;
let clockInTime;
let clockOutTime;
let clickedClockOut = false;
let timerCount = 0;
let wage;
let now = moment();
displayTimeTimer();
currentTimeTimer();


const updateUserData=()=>{
    return $.get("/api/tracker/user_data").then(function(data) {
      console.log(data);
      userData=data;
    });
  };

// var minutesPassed = moment().diff(start, 'minutes');

updateUserData().then(()=> {
    // $.get("/api/tracker/active_session").then((data) => {
    //     console.log(data);
    //     if(data) {
    //         start = moment(data.clock_in);
    //         totalSeconds = Math.round(moment.duration(moment().diff(start)).asSeconds());
    //         clockInTimeEl.textContent = "    " + start.format("hh:mm:ss");
    //         $("#clockedin").addClass("hide")
    //         $("#clockedout").removeClass("hide");
    //         displayLapsedTime();
    //     }
    // });

    const startToday = moment().startOf("day").toISOString();
    const endToday = moment().endOf("day").toISOString();
    $.get(`/api/tracker/sessions/${startToday}/${endToday}`).then((sessions) => {
        console.log(sessions);
        // sessionTable.empty();
        sessions.forEach((session)=> {
            const row = $("<tr>");
            row.append($(`<td>${moment(session.clock_in).format("hh:mm:ss")}</td>`));
            if (!session.clock_out) {
                row.append($('<td></td>'));
                row.append($('<td><label id="hours">00</label>:<label id="minutes">00</label>:<label id="seconds">00</label></td>'));
                row.append($('<td><span id="money-earned"></span></td>'));
            } else {
                row.append($(`<td>${moment(session.clock_out).format("hh:mm:ss")}</td>`));
                row.append($(`<td>${session.total_time}</td>`));
                row.append($(`<td>${session.total_time * userData.wage}</td>`));
            }
            sessionTable.append(row);
        });
    });
});
function displayLapsedTime() {

    const hoursLabel = document.querySelector("#hours");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    // if (totalSeconds !== 0) {
    //     totalSeconds = resumeClockInTime;
    // }
    timer = setInterval(setTime, 1000);

    function setTime() {
        if (clickedClockOut === true) {
        //     resumeClockinTime = totalSeconds;
        //     console.log(resumeClockInTime);
            clearInterval(timer);
        }
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        hoursLabel.innterHTML = pad(parseInt(totalSeconds / 3600));
        displayEarnings();
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

}

let userData;
let totalEarnings;

const displayEarnings=()=> {
    totalEarnings = ((userData.wage/ 3600) * totalSeconds).toFixed(2);
    todaysEarnings.textContent = totalEarnings;
};

let newTime;
let newEarnings;

const addTime=(time)=>{
    let oldTime=parseInt(userData.total_time);
    newTime=oldTime+time;
};

const addEarnings=(earnings)=>{
    let oldEarnings=parseFloat(userData.total_earnings);
    console.log(oldEarnings);
    newEarnings=oldEarnings+parseFloat(earnings);
};




function displayTimeTimer() {
    timer = setInterval(() => {
        displayTime.textContent = moment().format("dddd, MMMM DD, YYYY hh:mm A");
    }, 1000);
}
function currentTimeTimer() {
    timer = setInterval(() => {
        currentTimeEl.textContent = "Current Time: " + moment().format("h:mm:ss A");
    }, 1000);
}

clockInBtn.addEventListener("click", function (e) {
    updateUserData();
    start = moment();
    totalSeconds = 0;
    clockInTime = moment().format("hh:mm:ss");
    clockInTimeEl.textContent = "    " + clockInTime;
    $("#clockedin").addClass("hide");
    $("#clockedout").removeClass("hide");
    displayLapsedTime();
    $.ajax({
        url: "/api/tracker/clock_in",
        type: "PUT",
    });
});
clockOutBtn.addEventListener("click", function (e) {
    updateUserData();
    clockOutTime = moment().format("hh:mm:ss");
    // clockOutTimeEl.textContent = "    " + clockOutTime;
    clickedClockOut = true;
    $("#clockedout").addClass("hide");
    $("#clockedin").removeClass("hide");
    addTime(totalSeconds);
    addEarnings(totalEarnings);
    let newUserData={
        total_earnings: newEarnings,
        total_time: newTime
    };
    $.ajax({
        url: "/api/tracker/clock_out",
        type: "PUT",
      });
});
});




