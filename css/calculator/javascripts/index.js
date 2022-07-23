let calculator_input_number_v = document.getElementById('calculator_input_number');
let calculator_input_number_preview_v = document.getElementById('calculator_input_number_preview');
let calculator_input_number_ac_v = document.getElementById('calculator_input_ac');
let fourth_1 = document.getElementsByClassName('fourth');
var d = new Date();
var n = d.toLocaleTimeString();
var b = new Date()
var m = b.toLocaleDateString();

function display(displayValue) {
    calculator_input_number.value += displayValue;
}

function displaySolve() {
    let eq = calculator_input_number.value;
    calculator_input_number_preview.value = eq;

    let y = eval(eq);
    calculator_input_number.value = y;
}

function ac() {
    calculator_input_ac.addEventListener('click', () => {
        calculator_input_number.value = "";
        calculator_input_number_preview.value = "";

    })
}

function time() {
    calculator_time.addEventListener('click', () => {
        alert(n);
    })
}

function date() {
    calculator_date.addEventListener('click', () => {
        alert(m);
    })
}