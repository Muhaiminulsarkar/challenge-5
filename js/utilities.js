
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const valueNumber = parseFloat(inputValue);
    return valueNumber;
}

function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}