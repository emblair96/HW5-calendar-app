var currentDay = $("#currentDay")
var calendarEl = $(".calendar")
var description = $(".description")
var textarea = $("textarea")
var saveBtn = $(".saveBtn")
var calendarRows = $(".row")
descriptionArray = description.toArray()
textareaArray = textarea.toArray()

// var schedule =["", "", "", "", "", "", "", "", "", ""]
var calendarContent = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",  " ",  " "]

// Date in time (format: Sunday, October 25, 2020 6:39 PM)
var hour = moment().hour()

function init() {
// Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedData = JSON.parse(localStorage.getItem("schedule"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedData !== null) {
      calendarContent = storedData;
      console.log(storedData)
      updateSchedule(); 

    }
  
    // Render todos to the DOM

};

function updateSchedule() {
    for (var i=0; i<calendarContent.length; i++) {
        if (calendarContent[i] !== "") {
        textareaArray[i].innerHTML = calendarContent[i]
    }
}
    // for (var i=0; i<textareaArray.length; i++)
    // textareaArray[i].value = calendarContent[i];
}


function updateDate() {
    $("#currentDay").text(moment().format("LLLL"))
    
}

// function reset() {
//     for(var i=0; i<textareaArray.length; i++) {
//         textareaArray[i].classList.remove("past")
//         textareaArray[i].classList.remove("future")
//         textareaArray[i].classList.remove()
//     }
// }

function checkTime() {
    for(var i=0; i<textareaArray.length; i++) {
        var currentDescription = textareaArray[i]
        if (textareaArray[i].getAttribute("data-time") < hour) {
            currentDescription.classList.add("past")
        }
        else if (textareaArray[i].getAttribute("data-time") > hour) {
            currentDescription.classList.add("future")
        }

        else {
            currentDescription.classList.add("present")
        }
    }
}

function storeSched() {
    localStorage.setItem("schedule", JSON.stringify(calendarContent));
}

calendarRows.click(function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var descriptionEl = element.previousElementSibling
        var currentIndex = textareaArray.indexOf(descriptionEl)
        console.log(currentIndex)
        textareaArray[currentIndex].innerHTML = descriptionEl.value;
        var storeInput = descriptionEl.value;
        calendarContent[currentIndex] = storeInput
        storeSched();

    }
})

saveBtn.click(function() {


})

init();
// reset();
checkTime();

/*
When the user clicks on the save button, then the text that was inputted into the textarea/description will be saved
    - event listener
    - put text user inputted into an array
When the user visits the site again, the saved text will still appear
    - init by gettting any data stored in the array

What if i do a click function on the whole row, but only if it's a button do this thing...? 

Save userinput to an array based on the index of the item they clicked on...?
*/




/*
function renderCalendar() {
    for (var i=0; i<9; i++) {
        var row = $("<div>")
        calendarEl.append(row)
        var time = $("<div>")
        time.text(calendarContent[i].hour)
        row.append(time)
        var content = $("<div>")
        content.text(calendarContent[i].text)
        row.appendChild = (content)
        // var saveBtn = $("<button>")


    }
}

renderCalendar();
*/


/*

var calendarContent = [
    {
        hour: "9AM",
        text: "",
        value: 9,
    },

    {
        hour: "10AM",
        text: "",
        value: 10,
    },
    {
        hour: "11AM",
        text: "",
        value: 11,
    },
    {
        hour: "12PM",
        text: "",
        value: 12,
    },
    {
        hour: "1PM",
        text: "",
        value: 13,
    },
    {
        hour: "2PM",
        text: "",
        value: 14,
    },
    {
        hour: "3PM",
        text: "",
        value: 15,
    },
    {
        hour: "4PM",
        text: "",
        value: 16,
    },
    {
        hour: "5PM",
        text: "",
        value: 17,
    }

]
*/


updateDate();
// checkTime();

