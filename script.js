const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
const ageYears = document.getElementById("age-years");
const ageMonths = document.getElementById("age-months");
const ageDays = document.getElementById("age-days");

submit.addEventListener("click", calculateAge);

function calculateAge() {
    // Get the input values
    const inputDay = parseInt(day.value);
    const inputMonth = parseInt(month.value) - 1; // JavaScript months are 0-based (0 = January, 11 = December)
    const inputYear = parseInt(year.value);

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // 0-based
    const currentYear = currentDate.getFullYear();

    // Check for valid input
    if (
        isNaN(inputDay) ||
        isNaN(inputMonth) ||
        isNaN(inputYear) ||
        inputDay <= 0 ||
        inputMonth < 0 ||
        inputYear <= 0 ||
        inputDay > 31 ||
        inputMonth > 11
    ) {
        alert("Please enter a valid date.");
        return;
    }

    const birthDate = new Date(inputYear, inputMonth, inputDay);

    // Check if the input date is in the future
    if (birthDate > currentDate) {
        alert("Please enter a date that is not in the future.");
        return;
    }

    // Calculate the differences
    let years = currentYear - inputYear;
    let months = currentMonth - inputMonth;
    let days = currentDay - inputDay;

    // If the day difference is negative, borrow days from the previous month
    if (days < 0) {
        months--;
        const lastMonth = new Date(currentYear, currentMonth, 0);
        days = days + lastMonth.getDate(); // Add the number of days in the last month (getDate() returns no of days in the month)
    }

    // If the month difference is negative, borrow months from the previous year
    if (months < 0) {
        years--;
        months = months + 12;
    }

    // console.log("ageInYears ", years);
    // console.log("ageInMonths ", months);
    // console.log("ageInDays ", days);

    // Update the HTML with the calculated values
    ageYears.textContent = years;
    ageMonths.textContent = months;
    ageDays.textContent = days;
}
