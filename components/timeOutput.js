


function timeOutput(date) {
    const daysFunctions = {
        formatTime: function (time) {
            return time < 10 ? `0${time}` : time;
        }
    };

    // Tutaj możesz uzyskać dostęp do dateDiv i timeDiv
    const dateDiv = document.querySelector("#timer").childNodes[0];
    const timeDiv = document.querySelector("#timer").childNodes[1];

    dateDiv.textContent = daysFunctions.formatTime(date.Month) + "/" + daysFunctions.formatTime(date.Month) + "/" + daysFunctions.formatTime(date.Year);
    timeDiv.textContent = daysFunctions.formatTime(date.Hours) + ":" + daysFunctions.formatTime(date.Minutes) + ":" + daysFunctions.formatTime(date.Seconds);
}
export default timeOutput;