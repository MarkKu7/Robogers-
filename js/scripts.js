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