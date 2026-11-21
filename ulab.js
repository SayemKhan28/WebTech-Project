
function showFees() {

    let department = document.getElementById("department").value;
    let fees = document.getElementById("fees");

    if (department === "CE") {
        fees.innerHTML = "Total Fees: 902,750 Tk";
    }
    else if (department === "CSE") {
        fees.innerHTML = "Total Fees: 771,250 Tk";
    }
    else if (department === "EEE") {
        fees.innerHTML = "Total Fees: 771,250 Tk";
    }
    else if (department === "BBA") {
        fees.innerHTML = "Total Fees: 851,500 Tk";
    }
    else if (department === "Economics") {
        fees.innerHTML = "Total Fees: 786,500 Tk";
    }
    else {
        fees.innerHTML = "Total Fees:";
    }
}

function apply() {

    let department = document.getElementById("department").value;

    if (department === "") {
        alert("Please select a department first.");
    }
    else {
        alert("You selected " + department + ". Application Fee: 500 Tk");
    }
}
