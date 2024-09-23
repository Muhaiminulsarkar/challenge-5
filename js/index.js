
document.getElementById('noakhali-donate').addEventListener('click', function () {
    const inputValue = getInputValue('input-noakhali');

    const textValue = getTextValue('balance-noakhali');

    const mainBalance = getTextValue('main-balance');

    const addDonation = textValue + inputValue;

    const leftBalance = mainBalance - inputValue;

    document.getElementById('balance-noakhali').innerText = addDonation;
    document.getElementById('main-balance').innerText = leftBalance;
    document.getElementById('input-noakhali').value = ' ';


})

document.getElementById('feni-donate').addEventListener('click', function () {
    const inputValue = getInputValue('input-feni');

    const textValue = getTextValue('balance-feni');

    const mainBalance = getTextValue('main-balance');

    const addDonation = textValue + inputValue;

    const leftBalance = mainBalance - inputValue;

    document.getElementById('balance-feni').innerText = addDonation;
    document.getElementById('main-balance').innerText = leftBalance;
    document.getElementById('input-feni').value = ' ';


})