const daysContainer = document.querySelector("#days")
const dateDiv = document.createElement("div");
const timeDiv = document.createElement("div");
const timer = document.querySelector("#timer");

function generateDays(Date){
    var daysFunctions = {

    formatTime:function (time) {
                return time < 10 ? `0${time}` : time;
            }

    }



    for (let i=1;i<=31;i++){

            const myDiv = document.createElement("div");
            myDiv.textContent = i;
            myDiv.className="dni";
            daysContainer.appendChild(myDiv);

            if(i==Date.Day){
                myDiv.style.color= "red";
            }

        }


    timer.appendChild(dateDiv);
    timer.appendChild(timeDiv);

    dateDiv.textContent = daysFunctions.formatTime(Date.Month) + "/" + daysFunctions.formatTime(Date.Month) +"/" +daysFunctions.formatTime(Date.Year);
    timeDiv.textContent = daysFunctions.formatTime(Date.Hours)  + "/" + daysFunctions.formatTime(Date.Minutes) +"/" +daysFunctions.formatTime(Date.Seconds) ;


    return(dateDiv,timeDiv);



}
export default generateDays;