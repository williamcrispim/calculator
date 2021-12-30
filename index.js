let displayValue = document.getElementsByClassName("expression")[0];
displayValue.innerHTML = 0;
let buttons = document.querySelectorAll("table.calculator tbody td");
let ans = 0;

let renderButtonsActions = (function () {
    buttons.forEach((button) => {
        let aux = button.innerHTML;

        if (
            aux === '0'
            || aux === '1'
            || aux === '2'
            || aux === '3'
            || aux === '4'
            || aux === '5'
            || aux === '6'
            || aux === '7'
            || aux === '8'
            || aux === '9'
        ) {
            button['buttonFunction'] = "normal";
        }

        button.addEventListener("click", buttonsClick);
    });
})();

function clearAll() {
    displayValue.innerHTML = "0";
    ans = 0;
}

function clearExpression() {
    displayValue.innerHTML = "0";
}

function deleteValue() {
    if (displayValue.innerText.length === 1) {
        displayValue.innerHTML = "0";
    } else {
        displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
    }
}

function sqrtValue(value) {
    if (value > 0 && !isNaN(value)) {
        let expression = displayValue.innerHTML;
        displayValue.innerHTML = Math.sqrt(value);
        history(expression, displayValue.innerHTML, 'sqrt');
    } else {
        alert("Impossible to calculate.")
    }
}

function pow(value) {
    console.log(value);
}

function answerValue() {
    displayValue.innerHTML = ans;
}

function equal(value) {
    let expression = displayValue.innerHTML;
    displayValue.innerHTML = eval(value);
    ans = displayValue.innerHTML;
    history(expression, displayValue.innerHTML, "=");
}

function history(expression, result, button) {
    let history = document.getElementsByClassName('history')[0];
    let newElement = document.createElement('p');

    newElement.innerHTML = ''
    switch (button) {
        case ('='):
            newElement.innerHTML = `${expression} = ${result}`
            break;
        case ('sqrt'):
            newElement.innerHTML = `sqrt( ${expression} ) = ${result}`
            break;
        default:
            return
    }
    history.appendChild(newElement);
}

function buttonsClick(event) {
    let buttonValue = event.target.textContent;
    if (displayValue.innerHTML === '0') { displayValue.innerHTML = "" }

    switch (buttonValue) {
        case "CA":
            clearAll(buttonValue);
            break;
        case "C":
            clearExpression();
            break;
        case "delete":
            deleteValue(buttonValue);
            break;
        case "sqrt":
            sqrtValue(displayValue.innerHTML);
            break;
        case "x^y":
            pow(buttonValue);
            break;
        case "ans":
            answerValue();
            break;
        case "=":
            equal(displayValue.innerHTML);
            break;
        default:
            displayValue.innerHTML += buttonValue;
            break;
    }
}
