
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CSE") {
        fees = "1,020,450 Tk";
    }

    else if (department == "EEE") {
        fees = "843,200 Tk";
    }

    else if (department == "Architecture") {
        fees = "924,600 Tk";
    }

    else if (department == "BBA") {
        fees = "789,575 Tk";
    }

    else if (department == "English") {
        fees = "694,500 Tk";
    }

    else if (department == "Pharmacy") {
        fees = "1,082,500 Tk";
    }

    else if (department == "LLB") {
        fees = "954,600 Tk";
    }

    else if (department == "CE") {
        fees = "833,850 Tk";
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
        ". Application Fee: 1000 Tk");

    }

}
