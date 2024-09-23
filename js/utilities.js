
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    // console.log(inputValue);
    if (inputValue <= 0 || isNaN(inputValue || typeof inputValue === 'undefined')) {
        alert('Please Enter Valid Amount');
        return
    }

    const valueNumber = parseFloat(inputValue);
    // console.log(valueNumber);
    return valueNumber;
}

function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}