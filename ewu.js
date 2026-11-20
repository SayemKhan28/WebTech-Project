
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CSE") {
        fees = "1,003,400 Tk";
    }

    else if (department == "EEE") {
        fees = "1,003,400 Tk";
    }

    else if (department == "BBA") {
        fees = "917,400 Tk";
    }

    else if (department == "English") {
        fees = "820,400 Tk";
    }

    else if (department == "Economics") {
        fees = "820,400 Tk";
    }

    else if (department == "Pharmacy") {
        fees = "1,192,000 Tk";
    }

    else if (department == "LLB") {
        fees = "927,000 Tk";
    }

    else if (department == "CE") {
        fees = "1,035,900 Tk";
    }

    if (fees == "") {

        document.getElementById("fees").innerHTML = "Total Fees:";

    }

    else {

        document.getElementById("fees").innerHTML =
            "Total Fees: " + fees;

    }

}


function apply() {

    let department = document.getElementById("department").value;

    if (department == "") {

        alert("Please select a department first!");

    }

    else {

        alert("You selected " + department +
        ". Application Fee: 1500 Tk");

    }

}
