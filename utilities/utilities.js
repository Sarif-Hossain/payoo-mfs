// function for input field
function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// function for innerText
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// function for setting innerText
function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}
// function for toggle menu
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}
