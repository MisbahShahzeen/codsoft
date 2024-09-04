const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
const operators = Array.from(document.getElementsByClassName('operator'));
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const themeToggle = document.getElementById('theme-toggle');

let currentInput = '';
let operator = '';
let firstValue = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText.match(/[0-9.]/)) {
            currentInput += e.target.innerText;
            display.innerText = currentInput;
        } else if (e.target.innerText.match(/[+\-*/]/)) {
            firstValue = currentInput;
            operator = e.target.innerText;
            currentInput = '';
        }
    });
});

equals.addEventListener('click', () => {
    if (firstValue && operator && currentInput) {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstValue) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(currentInput);
                break;
        }
        display.innerText = result;
        currentInput = result;
        firstValue = '';
        operator = '';
    }
});

clear.addEventListener('click', () => {
    currentInput = '';
    firstValue = '';
    operator = '';
    display.innerText = '0';
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
