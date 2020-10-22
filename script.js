var currentDay = $("#currentDay");
var currentDate = moment().format("MMMM Do YYYY");
var currentHour = moment().format("H");
var tasksToDo = [];
var toDoRow = $(".row");

function beginScheduler() {
    toDoRow.each(function() {
    var hourRow = $(this);
    var toDoRowHour = parseInt(hourRow.attr("hour"));

    var toDoObj = {
        hour: toDoRowHour,
        text: ""
    }
    tasksToDo.push(toDoObj);
    });
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));
};

currentDay.text(currentDate);