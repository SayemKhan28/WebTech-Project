
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CE") {
        fees = "1,370,000 Tk";
    }

    else if (department == "CSE") {
        fees = "1,370,000 Tk";
    }

    else if (department == "EEE") {
        fees = "1,370,000 Tk";
    }

    else if (department == "Architecture") {
        fees = "1,900,000 Tk";
    }

    else if (department == "BBA") {
        fees = "1,330,000 Tk";
    }

    else if (department == "English") {
        fees = "1,280,000 Tk";
    }

    else if (department == "Economics") {
        fees = "1,280,000 Tk";
    }

    else if (department == "Pharmacy") {
        fees = "1,560,000 Tk";
    }

    else if (department == "LLB") {
        fees = "1,420,000 Tk";
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
