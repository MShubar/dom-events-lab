/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display p")

/*-------------------------------- Variables --------------------------------*/
let currentValue = ""
let operator = ""
let firstValue = ""
let isResultDisplayed = false

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent
    if (button.classList.contains("number")) {
      if (isResultDisplayed) {
        currentValue = ""
        isResultDisplayed = false
      }
      currentValue += buttonValue
      display.textContent = currentValue
    } else if (button.classList.contains("operator")) {
      if (buttonValue === "C") {
        currentValue = ""
        firstValue = ""
        operator = ""
        display.textContent = "0"
      } else if (currentValue && !firstValue) {
        firstValue = parseInt(currentValue)
        operator = buttonValue
        currentValue = ""
      } else if (firstValue && currentValue && operator) {
        firstValue = calculate(firstValue, parseInt(currentValue), operator)
        operator = buttonValue
        display.textContent = firstValue
        currentValue = ""
      }
    } else if (button.classList.contains("equals")) {
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

function calculate(num1, num2, operator) {
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
