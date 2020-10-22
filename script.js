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

function saveTask() {
    var tasksToDoHour = $(this).parent().attr("hour");
    var taskAdd = (($(this).parent()).children("textarea")).val();
    for (var i = 0 ; i < tasksToDo.length; i++) {
        if (tasksToDo[i].hour == tasksToDoHour) {
            tasksToDo[i].text = taskAdd;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));
}