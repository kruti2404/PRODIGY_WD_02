let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let recordBtn = document.getElementById("Record");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener("click", () => {
    if (!timer) {
        timer = true;
        stopwatch();
    }

});

stopBtn.addEventListener("click", () => {
    timer = false;
    clearInterval(interval);
})

resetBtn.addEventListener("click", () => {
    timer = false;
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("count").innerText = "00";

    let list = document.getElementById("display");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }


});

let interval;

function stopwatch() {
    interval = setInterval(() => {
        if (timer) {
            count++;

            if (count == 100) {
                second++;
                count = 0;
            }
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }

            let hrString = hour;
            let secString = second;
            let minString = minute;
            let countString = count;

            if (hour < 10) {
                hrString = "0" + hrString;
            }
            if (second < 10) {
                secString = "0" + secString;
            }
            if (minute < 10) {
                minString = "0" + minString;
            }
            if (count < 10) {
                countString = "0" + countString;
            }

            document.getElementById("hr").innerText = hrString;
            document.getElementById("min").innerText = minString;
            document.getElementById("sec").innerText = secString;
            document.getElementById("count").innerText = countString;


        }
    }, 10);

}

let display = document.getElementById("display");

recordBtn.addEventListener("click", () => {
    hr = document.getElementById("hr").innerText;
    min = document.getElementById("min").innerText;
    sec = document.getElementById("sec").innerText;
    count = document.getElementById("count").innerText;
    let lap = hr + " : " + min + " : " + sec + " : " + count;
    let li = document.createElement("li");
    li.innerText = lap;
    display.appendChild(li);
})
