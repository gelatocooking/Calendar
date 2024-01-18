function DayInterface(date) {
    let interfejs = document.createElement("div");
    interfejs.className = "interface";
    interfejs.textContent = '1';

    let days = document.querySelectorAll(".dni");

    days.forEach(function(day) {
        day.appendChild(interfejs.cloneNode(true)); // Użyj cloneNode, aby stworzyć kopię interfejsu dla każdego dnia
    });




}


export default DayInterface;