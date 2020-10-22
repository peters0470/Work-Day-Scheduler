var currentDay = $("#currentDay");
var currentDate = moment().format("MMMM Do YYYY");
var currentHour = moment().format("H");
var tasksToDo = [];
var toDoRow = $(".row");
var taskArea = $(".container");

function beginScheduler() {
    toDoRow.each(function() {
    var hourRow = $(this);
    var toDoRowHour = parseInt(hourRow.attr("data-hour"));

    var toDoObj = {
        hour: toDoRowHour,
        text: ""
    }
    tasksToDo.push(toDoObj);
    });
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));
};

currentDay.text(currentDate);

function saveTask() {
    var tasksToDoHour = $(this).parent().attr("data-hour");
    var taskAdd = (($(this).parent()).children("textarea")).val();
    for (var i = 0 ; i < tasksToDo.length; i++) {
        if (tasksToDo[i].hour == tasksToDoHour) {
            tasksToDo[i].text = taskAdd;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));   
}

function colorRows() {
    toDoRow.each(function() {
        var eachRow = $(this);
        var eachRowHour = parseInt(eachRow.attr("data-hour"));
        if (eachRowHour == currentHour) {
            eachRow.addClass("present").removeClass("future past");
    }
        if (eachRowHour > currentHour) {
            eachRow.addClass("future").removeClass("present past");
        }
        if (eachRowHour < currentHour) {
            eachRow.addClass("past").removeClass("present future");
        }
    });
}

taskArea.on("click", "button", saveTask);
colorRows();