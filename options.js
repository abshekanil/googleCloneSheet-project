const activeCellElement = document.querySelector(".selected-cell");

let selectedCell = null;

 function onFocusCell(e) {
    if(selectedCell) {
        selectedCell.classList.remove("active-cell");
    }
    selectedCell = e.target;
    activeCellElement.innerText = selectedCell.id;
    selectedCell.classList.add("active-cell");
};

