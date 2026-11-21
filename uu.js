
function showFees() {

    let department = document.getElementById("department").value;
    let fees = document.getElementById("fees");

    if (department === "CSE") {
        fees.innerHTML = "Total Fees: 558,000 Tk";
    }
    else if (department === "EEE") {
        fees.innerHTML = "Total Fees: 520,460 Tk";
    }
    else if (department === "BBA") {
        fees.innerHTML = "Total Fees: 551,761 Tk";
    }
    else if (department === "English") {
        fees.innerHTML = "Total Fees: 307,275 Tk";
    }
    else if (department === "Pharmacy") {
        fees.innerHTML = "Total Fees: 674,840 Tk";
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
        alert("You selected " + department + ". Application Fee: 300 Tk");
    }
}
