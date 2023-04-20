const beginDate = document.getElementById('beginDate');
const endDate = document.getElementById('endDate');
const days = document.getElementById('days');
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {
    days.innerHTML = calculateDaysBetweenDates(beginDate.value, endDate.value);
});

function dateToday() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
}

// populate default values when page loads
window.onload = () => { 
    console.info('window.onload');
    beginDate.value = dateToday();
    endDate.value = dateToday();
    days.innerHTML = calculateDaysBetweenDates(beginDate.value, endDate.value);
};

