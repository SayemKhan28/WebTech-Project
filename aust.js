
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CSE") {
        fees = "917,950 Tk";
    }

    else if (department == "EEE") {
        fees = "917,950 Tk";
    }

    else if (department == "Architecture") {
        fees = "1,139,050 Tk";
    }

    else if (department == "BBA") {
        fees = "733,810 Tk";
    }

    else if (department == "CE") {
        fees = "917,950 Tk";
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
        ". Application Fee: 1200 Tk");

    }

}
