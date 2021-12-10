let task1Result = document.querySelector("#task1Result");
let task2Result = document.querySelector("#task2Result");

let task3Result = document.querySelector("#task3Result");
let task3Input = document.querySelector("#task3Input");

let task4Result = document.querySelector("#task4Result");
let task4Input = document.querySelector("#task4Input");

let task5Result = document.querySelector("#task5Result");

let task6Result = document.querySelector("#task6Result");
let task6Input = document.querySelector("#task6Input");

let task7Result = document.querySelector("#task7Result");
let task7Input = document.querySelector("#task7Input");

let task8Result = document.querySelector("#task8Result");
let task8Input = document.querySelector("#task8Input");

//Дні, місяці
let days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "суббота"];
let months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

function task1(){
    let d = new Date();

    let month = months[d.getMonth()];
    let result = "Дата: " + d.getDate() + " " + month + " " + d.getFullYear() + " року"

    let day = "День: " + days[d.getDay()];

    let timeH = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    let timeM = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    let timeS = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    let time = "Час: " + timeH + ":" + timeM + ":" + timeS;

    task1Result.innerHTML = result+"<br>"+day+"<br>"+time;
}

function task2(d){
    let obj = {
        "dayNumber": "Номер дня: " + d.getDate(),
        "dayName": "Назва дня: " + days[d.getDay()]
    };
    
    task2Result.innerHTML = obj["dayNumber"] + "<br>" + obj["dayName"];
}

function task3(){
    let d = new Date();
    d.setDate(d.getDate() - parseInt(task3Input.value));

    task3Result.innerHTML = d.toLocaleDateString();
}

function task4(){
    let year = parseInt(task4Input.value.split(" ")[0]);
    let month = parseInt(task4Input.value.split(" ")[1]);

    task4Result.innerHTML = new Date(year, month, 0).getDate();
}

function task5(){
    let d = new Date();

    let a = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds();
    let b = 86400 - a;

    let obj = {
        "secondsA": "Секунд від початку дня: " + a,
        "secondsB": "Секунд до початку наступного дня: " + b
    };

    task5Result.innerHTML = obj["secondsA"] + "<br>" + obj["secondsB"];
}

function task6(){
    let year = parseInt(task6Input.value);

    if(year <= 0){
        task6Result.innerHTML = "Invalid data";
        return;
    }

    let X = year % 100 >= 50 ? 2 : 1;
    let C = year % 150 >= 50 ? parseInt(year / 100) : parseInt(year / 100) + 1;
    let M = year % 1000 >= 500 ? parseInt(year / 1000) + 1 : parseInt(year / 1000);


    task6Result.innerHTML = X + " " + C + " " + M;
}

function task7(){
    let start = task7Input.value.split(" ")[0];
    let end = task7Input.value.split(" ")[1];
    let result;

    start = start.split(".");
    end = end.split(".");

    start = start.map(function (x) { 
        return parseInt(x); 
    });
    end = end.map(function (x) { 
        return parseInt(x); 
    });

    result = end[2] - start[2] - 1

    if(start[0] <= end[0] && start[1] <= end[1] && start[2] <= end[2])
        result = end[2] - start[2];
    else if(start[0] >= end[0] && start[1] >= end[1] && start[2] >= end[2])
        result = end[2] - start[2];
    else
        result = end[2] - start[2] - 1

    // 05.07.2019 05.07.2020
    task7Result.innerHTML = result;
}

function task8(){
    let sunrise = task8Input.value.split(" ")[0];
    let sunset = task8Input.value.split(" ")[1];
    let result;

    sunrise = sunrise.split(":");
    sunset = sunset.split(":");

    sunrise = sunrise.map(function (x) { 
        return parseInt(x); 
    });
    sunset = sunset.map(function (x) { 
        return parseInt(x); 
    });

    result = parseInt(((sunrise[0] * 60 + sunrise[1]) + (sunset[0] * 60 + sunset[1]) - (23*60)) / 10);

    // 5:30 18:20
    task8Result.innerHTML = "0-" + result + " хв";

}