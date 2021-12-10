let task1Button = document.querySelector("#task1Button");
let task2Button = document.querySelector("#task2Button");
let task3Button = document.querySelector("#task3Button");
let task4Button = document.querySelector("#task4Button");
let task5Button = document.querySelector("#task5Button");
let task6Button = document.querySelector("#task6Button");
let task7Button = document.querySelector("#task7Button");
let task8Button = document.querySelector("#task8Button");

function task2P(){
    task2(new Date());
}

task1Button.addEventListener("click", task1);
task2Button.addEventListener("click", task2P);
task3Button.addEventListener("click", task3);
task4Button.addEventListener("click", task4);
task5Button.addEventListener("click", task5);
task6Button.addEventListener("click", task6);
task7Button.addEventListener("click", task7);
task8Button.addEventListener("click", task8);