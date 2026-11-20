
function showFees() {

    let department = document.getElementById("department").value;
    let fees = document.getElementById("fees");

    if (department === "CSE") {
        fees.innerHTML = "Total Fees: 784,100 Tk";
    }
    else if (department === "EEE") {
        fees.innerHTML = "Total Fees: 603,000 Tk";
    }
    else if (department === "Architecture") {
        fees.innerHTML = "Total Fees: 883,000 Tk";
    }
    else if (department === "BBA") {
        fees.innerHTML = "Total Fees: 673,500 Tk";
    }
    else if (department === "English") {
        fees.innerHTML = "Total Fees: 527,000 Tk";
    }
    else if (department === "Economics") {
        fees.innerHTML = "Total Fees: 479,500 Tk";
    }
    else if (department === "Pharmacy") {
        fees.innerHTML = "Total Fees: 981,000 Tk";
    }
    else if (department === "LLB") {
        fees.innerHTML = "Total Fees: 729,950 Tk";
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
