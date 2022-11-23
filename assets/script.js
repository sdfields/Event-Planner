// Variable to determine current date / time

var nowEl = dayjs().format("MMMM D, YYYY",)
$("#currentDay").text(nowEl)

// Function to compare current time to the time on the calendar timeblocks and alter the color based on past, present, and future

function trackTime () {
  var currentTime = dayjs().hour();
  var timeBlock = $(".time-block");
  console.log(currentTime, timeBlock)
  for(let x = 0; x < timeBlock.length; x++) {
  const textarea = timeBlock[x].children[1];
  var timeBlockEl = timeBlock[x].getAttribute("id");
  var timeId = parseInt(timeBlockEl.split("-")[1])
  console.log(timeId)
  if (timeId < currentTime) {
    textarea.classList.add ("past")
  } else if (timeId === currentTime) {
    textarea.classList.add ("present")
  } else {
    textarea.classList.add ("future")
  };
}
}

trackTime()

// Setting up the ability to save the value of each text area to local storage

$(".saveBtn").on("click", function() {
  var textValue = $(this).siblings("textarea").val()
  var textId = $(this).parent().attr("id")
  localStorage.setItem(textId, textValue)
})

// Accessing each particular text areas local storage from previous session

$("#hour-9 textarea").val(localStorage.getItem("hour-9"))
$("#hour-10 textarea").val(localStorage.getItem("hour-10"))
$("#hour-11 textarea").val(localStorage.getItem("hour-11"))
$("#hour-12 textarea").val(localStorage.getItem("hour-12"))
$("#hour-13 textarea").val(localStorage.getItem("hour-13"))
$("#hour-14 textarea").val(localStorage.getItem("hour-14"))
$("#hour-15 textarea").val(localStorage.getItem("hour-15"))
$("#hour-16 textarea").val(localStorage.getItem("hour-16"))
$("#hour-17 textarea").val(localStorage.getItem("hour-17"))
