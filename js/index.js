
document.getElementById('noakhali-donate').addEventListener('click', function () {
    const inputValue = getInputValue('input-noakhali');

    if (typeof inputValue === 'undefined') {
        return
    }

    const textValue = getTextValue('balance-noakhali');

    const mainBalance = getTextValue('main-balance');

    const addDonation = textValue + inputValue;

    const leftBalance = mainBalance - inputValue;

    if (inputValue > mainBalance) {
        alert('Your Balance is not insufficient');
        return
    }
    if (inputValue < mainBalance) {
        document.getElementById('my_modal_1').showModal();
    }

    document.getElementById('balance-noakhali').innerText = addDonation;
    document.getElementById('main-balance').innerText = leftBalance;
    document.getElementById('input-noakhali').value = '';

})

document.getElementById('feni-donate').addEventListener('click', function () {
    const inputValue = getInputValue('input-feni');

    if (typeof inputValue === 'undefined') {
        return
    }

    const textValue = getTextValue('balance-feni');

    const mainBalance = getTextValue('main-balance');

    const addDonation = textValue + inputValue;

    const leftBalance = mainBalance - inputValue;

    if (inputValue > mainBalance) {
        alert('Your Balance is not insufficient');
        return
    }
    if (inputValue < mainBalance) {
        document.getElementById('my_modal_1').showModal();
    }

    document.getElementById('balance-feni').innerText = addDonation;
    document.getElementById('main-balance').innerText = leftBalance;
    document.getElementById('input-feni').value = ' ';


})

document.getElementById('quota-donate').addEventListener('click', function () {
    const inputValue = getInputValue('input-quota');

    if (typeof inputValue === 'undefined') {
        return
    }

    const textValue = getTextValue('balance-quota');

    const mainBalance = getTextValue('main-balance');

    const addDonation = textValue + inputValue;

    const leftBalance = mainBalance - inputValue;

    if (inputValue > mainBalance) {
        alert('Your Balance is not insufficient');
        return
    }
    if (inputValue < mainBalance) {
        document.getElementById('my_modal_1').showModal();
    }

    document.getElementById('balance-quota').innerText = addDonation;
    document.getElementById('main-balance').innerText = leftBalance;
    document.getElementById('input-quota').value = '';

})