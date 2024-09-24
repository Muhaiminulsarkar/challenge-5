
// for noakhali
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

    const historyList = document.getElementById('history-list');

    const historyItem = document.createElement('div');
    historyItem.className = 'border border-outline rounded-lg p-6 my-5';
    historyItem.innerHTML = `
    <h3 class="text-lg font-semibold"> ${inputValue} Taka is Donated for Flood Relief at Noakhali, Bangladesh</h3>
    <p class="font-normal">${(new Date().toString())}</p>

    `;
    historyList.appendChild(historyItem);

})


// for feni
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
    document.getElementById('input-feni').value = '';

    const historyList = document.getElementById('history-list');

    const historyItem = document.createElement('div');
    historyItem.className = 'border border-outline rounded-lg p-6 my-5';
    historyItem.innerHTML = `
    <h3 class="text-lg font-semibold"> ${inputValue} Taka is Donated Flood Relief in Feni, Bangladesh</h3>
    <p class="font-normal">${(new Date().toString())}</p>

    `;
    historyList.appendChild(historyItem);
})


// for quota movement
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

    const historyList = document.getElementById('history-list');

    const historyItem = document.createElement('div');
    historyItem.className = 'border border-outline rounded-lg p-6 my-5';
    historyItem.innerHTML = `
    <h3 class="text-lg font-semibold"> ${inputValue} Taka is Aid for Injured in the Quota Movement, Bangladesh</h3>
    <p class="font-normal">${(new Date().toString())}</p>

    `;
    historyList.appendChild(historyItem);

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