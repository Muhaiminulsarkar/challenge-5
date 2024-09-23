
console.log(new Date().toString())
// Tue Sep 24 2024 01:48:06 GMT+0600 (Bangladesh Standard Time)


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

    document.getElementById('balance-noakhali').innerText = addDonation.toFixed(2);
    document.getElementById('main-balance').innerText = leftBalance.toFixed(2);
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

    document.getElementById('balance-feni').innerText = addDonation.toFixed(2);
    document.getElementById('main-balance').innerText = leftBalance.toFixed(2);
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

    document.getElementById('balance-quota').innerText = addDonation.toFixed(2);
    document.getElementById('main-balance').innerText = leftBalance.toFixed(2);
    document.getElementById('input-quota').value = '';

})


// history tab

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')

historyTab.addEventListener('click', function () {
    historyTab.classList.add('btn-color');
    historyTab.classList.remove('btn-outline');

    donationTab.classList.remove('btn-color');
    donationTab.classList.add('btn-outline');

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    
})

donationTab.addEventListener('click', function () {
    donationTab.classList.add('btn-color');
    donationTab.classList.remove('btn-outline');

    historyTab.classList.remove('btn-color');
    historyTab.classList.add('btn-outline');

    historySection.classList.add('hidden');
    donationSection.classList.remove('hidden');
    
})