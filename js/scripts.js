function input(number) {
  const inputnumber = number.toString();
  if (inputnumber.includes("3")) {
    return "Won't you be my neighbor?"
  } else if (inputnumber.includes("2")) {
    return "Boop!";
  } else if (inputnumber.includes("1")) {
    return "Beep!"
  } else {
    return inputnumber
  }
}

$(document).ready(function () {
  $("form#Count").submit(function (event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    processInput(userInput);
  });

  function processInput(userInput) {
    $("#output").empty();
    const userNumber = parseInt(userInput)
    for (i = 0; i <= userInput; i++) {
      $("#output").append(`<li>${input(i)}</li>`);
    }
  }
});