let count = 1;
function addCalculationProductEntry(areaType){
    const CalculationProductEntry = document.getElementById(areaType);
    const paragraph = document.createElement('p');
    paragraph.classList.add('my-4');
    paragraph.innerHTML =`${count}. ${areaType}`;
    CalculationProductEntry.appendChild(paragraph);
    count += 1;
}
