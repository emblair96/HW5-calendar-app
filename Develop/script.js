var currentDay = $("#currentDay")
var calendarEl = $(".calendar")
var description = $(".description")
var textarea = $("textarea")
descriptionArray = description.toArray()
textareaArray = textarea.toArray()

var currentIndex = 0;
var timeArray = [5, 10, 11, 12, 13, 14, 15, 16, 23]

// Date in time (format: Sunday, October 25, 2020 6:39 PM)
var hour = moment().hour()



function updateDate() {
    $("#currentDay").text(moment().format("LLLL"))
    
}

$(".description").each(function(index) {
    console.log(($(".description")[index]))

    if ($(this).attr("data-time") === hour) {
        $(".description").addClass("present")
    }
    else if ($(this).attr("data-time") < hour) {
        $(".description").addClass("past")
    }
    else if ($(this).attr("data-time") > hour) {
        $(".description").addClass("future")
    }
    });
  

// function checkTime() {
//     for(i=0; i<=description.length; i++) {
//         console.log(textareaArray[i])
//         if (description.attr("data-time") === hour) {
//             $(".description").addClass("present")
//         }
//         else if (descriptionArray[i].attr("data-time") < hour) {
//             $(".description").addClass("past")
//         }
//         else if (descriptionArray[i].getAttribute("data-time") > hour) {
//             $(".description").addClass("future")
//         }
//     }
   
// }





// $.each(obj, function(key, value) {
//     console.log(value);
//   });
    // if (hour > 15) {
    //     $(".description").addClass("present")
    // }


function renderCalendar() {
    for (var i=0; i<=calendarContent.length; i++) {
        var row = $("<div>")
        calencadarEl.appendChild(row)
        var time = $("<div>")
        row.appendChild(time)
        var content = $("<div>")
        content.appendChild = $("<div>")


    }
}





// function compareTime() {
//     while (calendar.firstChild) {

//     }
// }

var calendarContent = [
    {
        test: 9,
        text: "",
    },

    {
        test: 10,
        text: "",
    },
    {
        test: 11,
        text: "",
    },
    {
        test: 12,
        text: "",
    },
    {
        test: 13,
        text: "",
    },
    {
        test: 22,
        text: "",
    },
    {
        test: 24,
        text: "",
    },
    {
        test: 24,
        text: "",
    },
    {
        test: 24,
        text: "",
    },
    {
        test: 24,
        text: "",
    },
    {
        test: 24,
        text: "",
    },
  

]



updateDate();
// checkTime();

