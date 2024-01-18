
function interfaceMenu(){

    const intf = document.querySelectorAll(".interface");

    // W TYM MOMENCIE JEST BŁĄD KODU ZWIAZANY Z NIE POJAWIANIEM SIE INTERFEJSU DNIA 


    intf.forEach(function(interfejs){
        interfejs.textContent = "1"
        interfejs.addEventListener("mouseover", function() {
                console.log("Mouse over");
                interfejs.style.display = 'block';
                 // Ustaw wyższą wartość z-index

            });

            interfejs.addEventListener("mouseout", function() {
                interfejs.style.display = 'none';
            });

    })

}

export default interfaceMenu