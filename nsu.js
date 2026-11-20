
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CSE") {
        fees = "1,164,000 Tk";
    }

    else if (department == "EEE") {
        fees = "1,172,000 Tk";
    }

    else if (department == "Architecture") {
        fees = "1,599,000 Tk";
    }

    else if (department == "BBA") {
        fees = "1,060,000 Tk";
    }

    else if (department == "English") {
        fees = "1,060,000 Tk";
    }

    else if (department == "CE") {
        fees = "1,164,000 Tk";
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
        ". Please check the NSU admission portal for application.");

    }

}
