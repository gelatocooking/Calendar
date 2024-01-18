

import generateDays from "./components/generateDays.js"
import getDate from "./components/getDate.js"
import timeOutput from "./components/timeOutput.js"
import DayInterface from "./components/createDayInterface.js"


let date = getDate()

function main() {
    generateDays(date);
    const intf = DayInterface(date);
    interfaceMenu()


    // FUNKCJA CZASU
    setInterval(() => {
        date = getDate();
        timeOutput(date);


    }, 1000); // Aktualizuj co sekundę
}
main();