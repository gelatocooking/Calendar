function DayInterface(date) {
    let interfejs = document.createElement("div");
    interfejs.className = "interface";
    interfejs.textContent = '1';

    let days = document.querySelectorAll(".dni");

    days.forEach(function(day) {
        let clonnedInterfejs = day.appendChild(interfejs.cloneNode(false));

         day.addEventListener("mouseover", function() {
                console.log("Mouse over");
                 clonnedInterfejs.style.display = 'block';


            });

            day.addEventListener("mouseout", function() {
                                clonnedInterfejs.style.display = 'none';
            });// Użyj cloneNode, aby stworzyć kopię interfejsu dla każdego dnia
    });




}


export default DayInterface;