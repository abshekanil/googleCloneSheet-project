const activeCellElement = document.querySelector(".selected-cell");
const form = document.getElementById("options-form");
const expressionInput = document.getElementById("expression");

let selectedCell = null;

 function onFocusCell(e) {
    if(selectedCell) {
        selectedCell.classList.remove("active-cell");
    }
    selectedCell = e.target;
    activeCellElement.innerText = selectedCell.id;
    selectedCell.classList.add("active-cell");
};

function applyStylesToSelectedCell(styles){
    selectedCell.style.fontSize = styles.fontSize + "px";
    selectedCell.style.fontFamily = styles.fontFamily;
    selectedCell.style.fontWeight = styles.isBold ? "bold" : "400";
    selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
    selectedCell.style.textDecoration = styles.isUnderlined ? "underline" : "none";
    selectedCell.style.textAlign = styles.align;
    selectedCell.style.backgroundColor = styles.backgroundColor;
    selectedCell.style.color = styles.textColor;
}

form.addEventListener("change", function(){
    if(!selectedCell)
    {
        alert("Please select a cell before making any change on the options!");
        form.reset();
        return;
    }

    const formData = {
        fontFamily: form["fontFamily"].value,
        fontSize: form["fontSize"].value,
        isBold: form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderlined: form["isUnderlined"].checked,
        align: form["align"].value,
        textColor: form["textColor"].value,
        backgroundColor: form["backgroundColor"].value

    }

    applyStylesToSelectedCell(formData);
});

expressionInput.addEventListener("keyup",(e) => {
    if(e.code === "Enter" && selectedCell)
    {
        let expression = expressionInput.value;
        let result = eval(expression);
        selectedCell.innerText = result;
    }
});
