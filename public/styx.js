const endDate = dateToday();
const days = document.getElementById('days');
const todayDate = document.getElementById('todayDate');

const createDate = '2023-04-20';

function dateToday() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
}

// calculate days between two dates
function calculateDaysBetweenDates(beginDate, endDate) {
    const beginDateObj = new Date(beginDate);
    const endDateObj = new Date(endDate);
    const days = (endDateObj - beginDateObj) / (1000 * 60 * 60 * 24);
    return days;
}

// populate default values when page loads
window.onload = () => { 
    const currentUrl = window.location.pathname;
    
    if (currentUrl == '/') {
        todayDate.innerHTML = dateToday();    
        days.innerHTML = calculateDaysBetweenDates(createDate, dateToday());
    }
};

