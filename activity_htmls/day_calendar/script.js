//----------TIME----------\\

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
setInterval(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

var eightAm = moment("08:00:00", "hh:mm:ss"); //these will become values for each time block
var nineAm = moment("09:00:00", "hh:mm:ss"); //24 hour clock
var tenAm = moment("10:00:00", "hh:mm:ss");
var elevenAm = moment("11:00:00", "hh:mm:ss");
var twelvePm = moment("12:00:00", "hh:mm:ss");
var onePm = moment("13:00:00", "hh:mm:ss");
var twoPm = moment("14:00:00", "hh:mm:ss");
var threePm = moment("15:00:00", "hh:mm:ss");
var fourPm = moment("16:00:00", "hh:mm:ss");
var fivePm = moment("17:00:00", "hh:mm:ss");
var sixPm = moment("18:00:00", "hh:mm:ss");
var sevenPm = moment("19:00:00", "hh:mm:ss");
var eightPm = moment("20:00:00", "hh:mm:ss");
var ninePm = moment("21:00:00", "hh:mm:ss");
 
//                   0          1        2         3           4          5        6         7         8         9        10        11          12
var textAreas = ["eightam", "nineam", "tenam", "elevenam", "twelvepm", "onepm", "twopm", "threepm", "fourpm", "fivepm", "sixpm", "sevenpm", "eightpm"];

getReminders();

//----------STORAGE----------\\
$(".btn").on("click", function() {
    for (let i = 0; i < textAreas.length; i++) {
        localStorage.setItem(`text${textAreas[i]}`, JSON.stringify($(`#${textAreas[i]}`).val()));
    }
});

function getReminders() {
    for (let i = 0; i < textAreas.length; i++) {
        var storedReminders = JSON.parse(localStorage.getItem(`text${textAreas[i]}`));
        if (storedReminders !== null) {
            $(`#${textAreas[i]}`).text(storedReminders);
        }
    }
}

// $("#eightam").text("todo list");
// *** $("#eightam").val() = "todo list" || text entered ***

//if (moment() > currentTime && moment() < future time) {background color: gray}
//if (moment() > eightAm && moment() < nineAm) {background color: green} will indicate current time!!!

//----------BACKGROUND COLOR----------\\
if (moment() < eightAm) {
    for (let i = 0; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > eightAm && moment() < nineAm) {
    $("#eightam").css("background-color", "rgb(45, 209, 45)");
    for (let i = 1; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > nineAm && moment() < tenAm) {
    $("#eightam").css("background-color", "#ff6961");
    $("#nineam").css("background-color", "rgb(45, 209, 45)");
    for (let i = 2; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > tenAm && moment() < elevenAm) {
    for (let i = 0; i < 2; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#tenam").css("background-color", "rgb(45, 209, 45)");
    for (let i = 3; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > elevenAm && moment() < twelvePm) {
    for (let i = 0; i < 3; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#elevenam").css("background-color", "rgb(45, 209, 45)");
    for (let i = 4; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > twelvePm && moment() < onePm) {
    for (let i = 0; i < 4; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#twelvepm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 5; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > onePm && moment() < twoPm) {
    for (let i = 0; i < 5; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#onepm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 6; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > twoPm && moment() < threePm) {
    for (let i = 0; i < 6; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#twopm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 7; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > threePm && moment() < fourPm) {
    for (let i = 0; i < 7; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#threepm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 8; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > fourPm && moment() < fivePm) {
    for (let i = 0; i < 8; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#fourpm").css("background-color", "rgb(45, 209, 45)");   
    for (let i = 9; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > fivePm && moment() < sixPm) {
    for (let i = 0; i < 9; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#fivepm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 10; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > sixPm && moment() < sevenPm) {
    for (let i = 0; i < 10; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#sixpm").css("background-color", "rgb(45, 209, 45)");
    for (let i = 11; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "rgb(172, 161, 161)");
    }

} else if (moment() > sevenPm && moment() < eightPm) {
    for (let i = 0; i < 11; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#sevenpm").css("background-color", "rgb(45, 209, 45)");
    $("#eightpm").css("background-color", "rgb(172, 161, 161)");

} else if (moment() > eightPm && moment() < ninePm) {
    for (let i = 0; i < 12; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
    $("#eightpm").css("background-color", "rgb(45, 209, 45)");

} else if (moment() > ninePm) {
    for (let i = 0; i < textAreas.length; i++) {
        $(`#${textAreas[i]}`).css("background-color", "#ff6961");
    }
}