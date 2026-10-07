let displayval = '';

let c = document.getElementById("dis");

function display(input) {
    displayval += input;
    c.value = displayval;
}

function cleardis() {
    displayval = "";
    c.value = displayval;
}

function remove() {
    displayval = displayval.slice(0, displayval.length - 1);
    c.value = displayval;
}

function calci() {
    try {
        displayval = eval(displayval);
        c.value = String(displayval);
    }
    catch (error) {
        c.value = "Error";
        displayval = "";
    }
}