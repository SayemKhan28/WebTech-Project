
function showFees() {

    let department = document.getElementById("department").value;
    let fees = document.getElementById("fees");

    if (department === "CSE") {
        fees.innerHTML = "Total Fees: 1,011,500 Tk";
    }
    else if (department === "EEE") {
        fees.innerHTML = "Total Fees: 992,000 Tk";
    }
    else if (department === "BBA") {
        fees.innerHTML = "Total Fees: 894,500 Tk";
    }
    else if (department === "English") {
        fees.innerHTML = "Total Fees: 894,500 Tk";
    }
    else if (department === "Economics") {
        fees.innerHTML = "Total Fees: 894,500 Tk";
    }
    else if (department === "CE") {
        fees.innerHTML = "Total Fees: 894,500 Tk";
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
        alert("You selected " + department + ". Application Fee: 1000 Tk");
    }
}
