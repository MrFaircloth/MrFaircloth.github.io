// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    function setProgress(numerator, denominator) {
        const percent = numerator / denominator;
        const circle = document.querySelector('.circle');
        const circumference = circle.getTotalLength();
        const offset = circumference - percent * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;

        // Update the text in the center of the circle
        const circleText = document.querySelector('.circle-text');
        circleText.textContent = `${numerator}/${denominator}`;
    }
    // Set the progress to 60%
    const rating = 2.66 / 4 * 100;
    setProgress(2.66, 4);
});