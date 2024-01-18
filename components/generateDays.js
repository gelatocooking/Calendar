const daysContainer = document.querySelector("#days")



function generateDays(Date){

    console.log("siema");
    console.log(Date);
    for (let i=1;i<=31;i++){

            const myDiv = document.createElement("div");
            myDiv.textContent =i;
            myDiv.className="dni";
            daysContainer.appendChild(myDiv);

            if(i==Date.Day){
                myDiv.style.color= "red";
            }

        }




}
export default generateDays;