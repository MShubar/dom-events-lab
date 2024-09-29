/*-------------------------------- Constants --------------------------------*/
//Assign the buttons to a variables
const buttons = document.querySelectorAll(".button")
//Assign the display to a variables
const display = document.querySelector(".display p")

/*-------------------------------- Variables --------------------------------*/
// value of what number I clicked
let currentValue = ""
// value of what operator I clicked
let operator = ""
// what is stored from the current value is changed to first value
let firstValue = ""
// is my display showing the results.. well I didn't do the operation yet to false?
let isResultDisplayed = false

/*----------------------------- Event Listeners -----------------------------*/
// just listens to each click and I will decide weather I want functions inside other functions or 1 large function
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent
    //simply the number should always be the current value if clicked unless result is displayed
    if (button.classList.contains("number")) {
      if (isResultDisplayed) {
        currentValue = ""
        isResultDisplayed = false
      }
      currentValue += buttonValue
      display.textContent = currentValue
    }
    // operators usage
    else if (button.classList.contains("operator")) {
      // C changes display to 0
      if (buttonValue === "C") {
        currentValue = ""
        firstValue = ""
        operator = ""
        display.textContent = "0"
      }
      // Just assigns current value to first value of course needs to be changed to integer
      else if (currentValue && !firstValue) {
        firstValue = parseInt(currentValue)
        operator = buttonValue
        currentValue = ""
      }
      // I have everything so just calculate
      else if (firstValue && currentValue && operator) {
        firstValue = calculate(firstValue, parseInt(currentValue), operator)
        operator = buttonValue
        display.textContent = firstValue
        currentValue = ""
      }
    }
    // equals alone sad
    else if (button.classList.contains("equals")) {
      if (firstValue !== null && currentValue && operator) {
        const result = calculate(firstValue, parseInt(currentValue), operator)
        display.textContent = result
        firstValue = ""
        operator = ""
        currentValue = ""
        isResultDisplayed = true
      }
    }
  })
})

/*-------------------------------- Functions --------------------------------*/

// operations requires num 1 num 2 and an operator
const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2
  } else if (operator === "-") {
    return num1 - num2
  } else if (operator === "*") {
    return num1 * num2
  } else if (operator === "/") {
    return num1 / num2
  }
}
